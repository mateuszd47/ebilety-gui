import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: true,
    },
});
