import sveltePreprocess from "svelte-preprocess";

import importing from "postcss-import";
import variables from "postcss-simple-vars";
import calc from "postcss-calc";
import nesting from "tailwindcss/nesting/index.js";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const preprocess = sveltePreprocess({
    postcss: {
        plugins: [
            importing(),
            variables(),
            calc(),
            nesting(),
            tailwind(),
            autoprefixer()
        ]
    }
});

export default { preprocess };
