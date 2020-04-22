import Vue from "vue";
import Router from "vue-router";
import VueTippy from "vue-tippy";

import GlobalComponent from "./util/globalComponent";

import "vue2-animate/dist/vue2-animate.min.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

Vue.use(Router);
Vue.use(GlobalComponent);
Vue.use(VueTippy, {
    directive: "tippy", // => v-tippy
    arrow: true
});

import Index from "./page/Index";

const Timeline = () => import("./page/Timeline");
const Articles = () => import("./page/Articles");

const router = {
    routes: [
        {
            path: "/",
            name: "主页",
            component: Index,
            meta: { plain: true }
        },
        {
            path: "/timeline",
            name: "时间线",
            component: Timeline
        },
        {
            path: "/articles",
            name: "文章",
            component: Articles
        }
    ],
    mode: "history"
};

export default new Router(router);
