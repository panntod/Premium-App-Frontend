import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const viteURL = env.VITE_BASE_URL || "/";

  return {
    plugins: [react()],
    base: viteURL,
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
  };
});