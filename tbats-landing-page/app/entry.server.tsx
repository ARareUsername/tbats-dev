import type { EntryContext } from 'react-router';
import { ServerRouter } from 'react-router';
import { renderToPipeableStream } from 'react-dom/server';
import { isbot } from 'isbot';
import { PassThrough } from 'node:stream';

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get('user-agent');
    const isBotUserAgent = userAgent ? isbot(userAgent) : false;

    const readyOption = isBotUserAgent ? 'onAllReady' : 'onShellReady';

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const streamHeaders = new Headers(responseHeaders);
          streamHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(body as any, {
              status: responseStatusCode,
              headers: streamHeaders,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
