import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import devServer from '@hono/vite-dev-server';
import { build } from 'esbuild';

export default defineConfig({
  server: {
    port: 3000,
    // https://github.com/remix-run/remix/discussions/8917#discussioncomment-8640023
    warmup: {
      clientFiles: ['./app/entry.client.tsx', './app/root.tsx', './app/routes/**/*'],
    },
  },
  // https://github.com/remix-run/remix/discussions/8917#discussioncomment-8640023
  optimizeDeps: {
    include: ['./app/routes/**/*'],
  },
  plugins: [
    devServer({
      injectClientScript: false,
      entry: process.env.NODE_ENV === 'production' ? 'server/index.ts' : 'server/local.ts',
      exclude: [/^\/(app)\/.+/, /^\/@.+$/, /^\/node_modules\/.*/],
    }),
    tsconfigPaths(),
    remix({
      serverBuildFile: 'remix.js',
      buildEnd: async () => {
        await build({
          alias: { '@': './app' },
          // The final file name
          outfile: 'build/server/index.js',
          // Our server entry point
          entryPoints: ['server/index.ts'],
          // Dependencies that should not be bundled
          // We import the remix build from "../build/server/remix.js", so no need to bundle it again
          external: ['./build/server/*'],
          platform: 'node',
          format: 'esm',
          // Don't include node_modules in the bundle
          packages: 'external',
          bundle: true,
          logLevel: 'info',
        }).catch((error: unknown) => {
          console.error(error);
          throw error;
        });
      },
    }),
  ],
});
