import { createMiddleware } from 'hono/factory';

/**
 * Cache middleware
 *
 * @param seconds - The number of seconds to cache
 */
export function cache(seconds: number) {
  return createMiddleware(async (c, next) => {
    if (!/\.[\dA-Za-z]+$/.test(c.req.path) || c.req.path.endsWith('.data')) {
      return next();
    }

    await next();

    if (!c.res.ok) {
      return;
    }

    c.res.headers.set('cache-control', `public, max-age=${seconds}`);
  });
}
