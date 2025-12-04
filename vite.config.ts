// vite.config.ts (Vite 표준 기본 설정)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🚨 여기에는 아무런 build나 root 설정을 추가하지 않습니다.
  // 🚨 Vite가 index.html과 src/main.tsx를 자동으로 찾도록 합니다.
});