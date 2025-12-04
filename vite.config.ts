// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 🚨 최종 수정: alias를 모두 제거했으므로, baseUrl 경로도 삭제합니다.
  // 🚨 Final Fix: 루트 디렉토리가 현재 디렉토리임을 명시하고, index.html을 엔트리로 지정합니다.
  root: '.', // 현재 디렉토리를 루트로 설정
  build: {
    outDir: 'dist', // 빌드 결과 폴더 (Netlify 설정과 일치)
    // entry points가 index.html임을 명시적으로 알려줍니다.
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  
  // 🚨 별칭(alias) 문제로 인해 이 설정을 모두 삭제했거나,
  // 🚨 App.tsx에서 별칭을 모두 상대 경로로 바꿨으므로,
  // 🚨 아래 resolve 블록은 필요 없거나 삭제되어야 합니다.
  /*
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  */
});