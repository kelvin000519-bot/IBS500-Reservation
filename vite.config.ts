// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🚨 최종 수정: Rollup이 파일을 정확히 찾도록 루트 디렉토리를 명시합니다.
  root: '.', 
  // 정적 파일을 찾을 디렉토리도 현재 디렉토리임을 명시합니다.
  publicDir: '.', 
});