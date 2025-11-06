import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/app': path.resolve(__dirname, 'src/app'),
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setupTests.ts'],
    globals: true,
    coverage: {
      reporter: ['text','lcov'],
    }
  }
});
