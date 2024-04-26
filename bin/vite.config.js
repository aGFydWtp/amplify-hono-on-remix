import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './build/server/index.js', // エントリーファイルを明示的に指定
    },
  },
});
