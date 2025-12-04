import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  // 1. 빌드 루트 폴더를 'client'로 지정합니다. (현재 파일 위치와 일치)
  root: "client", 

  // 2. 배포 결과물 폴더 이름을 'dist'로 지정합니다.
  build: {
    // Netlify가 최종적으로 배포할 빌드 결과물을 저장할 위치를 명시합니다.
    // **중요:** root가 'client'이므로, outDir은 'client'를 기준으로 상대 경로가 됩니다.
    // Netlify는 repo 루트의 'dist'를 기대하므로, outDir을 프로젝트 루트의 'dist'로 변경합니다.
    outDir: "../dist",  // ⬅️ outDir을 루트 폴더의 'dist'로 변경!
    emptyOutDir: true,
    
    // **추가:** 엔트리 포인트(진입점)를 명시적으로 .tsx 파일로 지정하여 빌드 오류 방지
    rollupOptions: {
        input: 'client/index.tsx', // ⬅️ .tsx 파일을 강제 지정합니다.
    },
  },

  ssr: {
    // 빌드 시 Express나 Firebase를 외부 모듈로 처리하여 충돌을 방지합니다.
    noExternal: ['express', 'firebase', 'http'] 
  },
  
  // 3. 별칭(alias) 설정을 단순화합니다.
  resolve: {
    alias: {
      "@": "/client/src",
    },
  },
});