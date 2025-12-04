import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  // 1. 빌드 루트 폴더를 'client'로 지정합니다. 
  //    (index.html과 index.ts가 client 폴더 안에 있어야 합니다.)
  root: "client", 

  // 2. 배포 결과물 폴더 이름을 'dist'로 지정합니다. (Netlify 표준)
  build: {
    outDir: "dist", 
    emptyOutDir: true,
  },
ssr: {
    // 빌드 시 Express나 Firebase를 외부 모듈로 처리하여 충돌을 방지합니다.
    noExternal: ['express', 'firebase', 'http'] 
  },
  // 3. 별칭(alias) 설정을 단순화합니다.
  resolve: {
    alias: {
      "@": "/client/src", // 필요하다면 이 경로는 다시 조정될 수 있습니다.
    },
  },
});