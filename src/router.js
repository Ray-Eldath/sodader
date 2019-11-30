import Vue from "vue";
import Router from "vue-router";
import VueTippy from "vue-tippy";

import GlobalComponent from "./util/globalComponent";

require("vue2-animate/dist/vue2-animate.min.css");
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

const router = {
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index
        },
        {
            path: "/timeline",
            name: "Timeline",
            component: Timeline
        }
    ]
};

export default new Router(router);
