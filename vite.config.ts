import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@hooks": path.resolve(__dirname, "./src/hooks"), // 추가된 경로
      "@contexts": path.resolve(__dirname, "./src/contexts"), // 추가된 경로
      "@store": path.resolve(__dirname, "./src/store"), // 추가된 경로
      "@modules": path.resolve(__dirname, "./src/modules"), // 추가된 경로
      "@types": path.resolve(__dirname, "./src/types"),
      "@apis": path.resolve(__dirname, "./src/apis"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600, // 빌드 시 청크 경고 크기 제한
  },
});
