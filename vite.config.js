import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", {
            eager: true,
        });
        return pages[`./Pages/${name}.vue`];
    },
});
