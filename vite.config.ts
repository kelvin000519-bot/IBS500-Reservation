import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  
  // root 설정 없음 (최상위 루트 사용)
  // root: "client", <- 반드시 제거되어야 합니다.

  build: {
    outDir: "dist", // Netlify publish directory와 일치 (image_822ae8.png 참조)
    emptyOutDir: true,
    
    // **추가:** Vite가 index.html 파일을 복사하는 기본 동작을 무효화하고
    //          루트 폴더의 index.html을 강제로 사용하도록 설정합니다.
    rollupOptions: {
        // 엔트리 포인트를 index.html로 설정하여 Vite가 html 파일을 시작점으로 인식하게 합니다.
        // 파일이 루트에 있으므로 경로도 루트 기준입니다.
        input: './index.html', 
    },
  },

  ssr: {
    noExternal: ['express', 'firebase', 'http'] 
  },
  
  resolve: {
    alias: {
      "@": "/src", 
    },
  },
});