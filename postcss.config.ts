import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

import config from "./tailwind.config";

export default {
    plugins: [
        tailwind(config),
        autoprefixer()
    ],
}
