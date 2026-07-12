import { env } from '../../src/env';

interface NetlifyEvent {
  body: string | null;
  headers: Record<string, string | undefined>;
  httpMethod: string;
  path: string;
  queryStringParameters: Record<string, string | undefined>;
}

interface NetlifyResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

// In-memory store for rate limiting (5 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function parseBody(body: string | null, contentType: string | undefined): Record<string, string> {
  if (!body) return {};
  if (contentType?.includes('application/json')) {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  // Parse application/x-www-form-urlencoded
  const params = new URLSearchParams(body);
  const result: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

export async function handler(event: NetlifyEvent): Promise<NetlifyResponse> {
  // Allow POST requests only
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }

  // Rate Limiting Check
  const clientIp =
    event.headers['x-nf-client-connection-ip'] ||
    event.headers['client-ip'] ||
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    'unknown';

  if (clientIp !== 'unknown') {
    const now = Date.now();
    const record = rateLimitMap.get(clientIp);

    if (!record) {
      rateLimitMap.set(clientIp, { count: 1, lastReset: now });
    } else {
      if (now - record.lastReset > LIMIT_WINDOW) {
        record.count = 1;
        record.lastReset = now;
      } else {
        record.count++;
        if (record.count > MAX_REQUESTS) {
          return {
            statusCode: 429,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              success: false,
              message: 'Too many requests. Please try again in a minute.',
            }),
          };
        }
      }
    }
  }

  // Parse fields
  const contentType = event.headers['content-type'] || event.headers['Content-Type'];
  const fields = parseBody(event.body, contentType);

  const userName = fields['user_name']?.trim() || '';
  const userEmail = fields['user_email']?.trim() || '';
  const projectBudget = fields['project_budget']?.trim() || '';
  const projectDesc = fields['project_desc']?.trim() || '';
  const botField = fields['bot_field']?.trim() || ''; // Honeypot field

  // Honeypot validation - if filled out, fake success silently to confuse spam bots
  if (botField) {
    console.log('[Honeypot Triggered] Fake success returned.');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message sent successfully' }),
    };
  }

  // Input Validation
  if (!userName || !userEmail || !projectDesc) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Please fill in all required fields.' }),
    };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Invalid email address format.' }),
    };
  }

  // Length limits check
  if (userName.length > 100 || userEmail.length > 254 || projectDesc.length > 5000) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Input values exceed maximum limits.' }),
    };
  }

  try {
    const serviceId = env.EMAILJS_SERVICE_ID;
    const templateId = env.EMAILJS_TEMPLATE_ID;
    const publicKey = env.EMAILJS_PUBLIC_KEY;
    const privateKey = env.EMAILJS_PRIVATE_KEY;

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: {
        user_name: userName,
        user_email: userEmail,
        project_budget: projectBudget,
        project_desc: projectDesc,
      },
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('EmailJS REST API error:', errText);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, message: 'Failed to send email via provider.' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Request sent successfully!' }),
    };
  } catch (error) {
    console.error('Proxy Handler Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Internal Server Error' }),
    };
  }
}
