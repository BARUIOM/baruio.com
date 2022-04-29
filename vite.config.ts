import { resolve } from "path";

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    css: { postcss },
});
