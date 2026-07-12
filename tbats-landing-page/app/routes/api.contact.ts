import type { ActionFunctionArgs } from 'react-router';
import { env } from '../../src/env';

// In-memory store for rate limiting (5 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
    });
  }

  // Rate Limiting Check
  // In React Router, client IP can be parsed from headers
  const clientIp =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('client-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
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
          return new Response(
            JSON.stringify({ error: 'Too many requests. Please try again later.' }),
            {
              status: 429,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
      }
    }
  }

  const formData = await request.formData();
  const userName = formData.get('user_name')?.toString().trim() || '';
  const userEmail = formData.get('user_email')?.toString().trim() || '';
  const projectBudget = formData.get('project_budget')?.toString().trim() || '';
  const projectDesc = formData.get('project_desc')?.toString().trim() || '';
  const botField = formData.get('bot_field')?.toString().trim() || ''; // Honeypot field

  // Honeypot validation
  if (botField) {
    console.log('[Honeypot Triggered] Fake success returned in route action.');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validation
  if (!userName || !userEmail || !projectDesc) {
    return new Response(JSON.stringify({ error: 'Please fill in all required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    return new Response(JSON.stringify({ error: 'Invalid email address format.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (userName.length > 100 || userEmail.length > 254 || projectDesc.length > 5000) {
    return new Response(JSON.stringify({ error: 'Input values exceed maximum limits.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
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

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('EmailJS REST API error response:', errText);
      return new Response(JSON.stringify({ error: 'Failed to send request. Please try again.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('EmailJS submit error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
