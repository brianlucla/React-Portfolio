import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
