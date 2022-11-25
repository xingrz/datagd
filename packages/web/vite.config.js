import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base: 'datagd/',
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
  ],
});