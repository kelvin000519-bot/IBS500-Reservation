import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],

  // root 설정은 파일이 루트에 있으므로 제거 (Vite가 기본값으로 프로젝트 루트 사용)

  build: {
    outDir: "dist", // ⬅️ 이 폴더는 Netlify의 "Publish directory"와 일치해야 합니다.
    emptyOutDir: true,
    
    // **가장 중요:** HTML 파일을 Entry Point로 명시적으로 지정하여 빌드 혼란을 막습니다.
    rollupOptions: {
        input: './index.html', // ⬅️ 루트 폴더의 index.html을 강제 지정합니다.
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