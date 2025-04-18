import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../dist"
    },
    resolve: {
        alias: [
            {
                find: /^react-bootstrap\/(.*)$/, // Match all subpaths
                replacement: "react-bootstrap/cjs/$1" // Redirect them to the CJS versions
            }
        ]
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    }
});
