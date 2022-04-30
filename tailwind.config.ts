import type { TailwindConfig } from "tailwindcss/tailwind-config";

const config: TailwindConfig = {
    content: [
        './index.html',
        './src/**/*.{svelte,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#0a0a0a',
            },
        },
    },
    plugins: [],
};

export default config;
