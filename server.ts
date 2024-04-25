import { serve } from '@hono/node-server';
// import { Hono } from 'hono';

// const app = new Hono();
// app.get('/', (c) => {
//   const userAgent = c.req.raw.headers.get('User-Agent');
//   return c.text(`Hello Hono!\nUA: ${userAgent}`);
// });

// serve(app);

// import type { AppLoadContext } from '@remix-run/cloudflare';
// import { createRequestHandler } from '@remix-run/cloudflare';
// import { Hono } from 'hono';

// const app = new Hono();

// app.all('*', async (c) => {
//   // @ts-expect-error it's not typed
//   const build = await import('virtual:remix/server-build');
//   const handler = createRequestHandler(build, 'development');
//   const remixContext = {
//     cloudflare: {
//       env: c.env,
//     },
//   } as unknown as AppLoadContext;
//   return handler(c.req.raw, remixContext);
// });

// export default app;

import { createRequestHandler } from '@remix-run/node';

// notice that the result of `remix vite:build` is "just a module"
// import * as build from './build/server/index.js';
import { Hono } from 'hono';

const app = new Hono();

app.all('*', async (c) => {
  // @ts-expect-error it's not typed
  const build = await import('virtual:remix/server-build');
  const handler = createRequestHandler(build, 'development');
  // const remixContext = {
  //   cloudflare: {
  //     env: c.env,
  //   },
  // } as unknown as AppLoadContext;
  return handler(c.req.raw);
});
// app.use(express.static('build/client'));

// // and your app is "just a request handler"
// app.all('*', createRequestHandler({ build }));

// app.listen(3000, () => {
//   console.log('App listening on http://localhost:3000');
// });
serve(app);
