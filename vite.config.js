import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSvgr(), // Add the ViteSvgr plugin
  ],
});
