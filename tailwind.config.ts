import type { TailwindConfig } from "tailwindcss/tailwind-config";

const config: TailwindConfig = {
    content: [
        './index.html',
        './src/**/*.{svelte,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
