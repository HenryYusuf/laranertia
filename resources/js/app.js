import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    title: (title) => (title ? `${title} - Laranertia` : "Laranertia"),
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: "#FF0000",

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue");
        return pages[`./Pages/${name}.vue`]().then((module) => {
            if (module.default.layout === undefined) {
                module.default.layout = Layout;
            }

            /* 2 method same results */
            // if (!module.default.layout) {
            //     module.default.layout = Layout;
            // }
            // module.default.layout ??= Layout;

            return module.default;
        });
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
});
