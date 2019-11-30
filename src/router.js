import Vue from "vue";
import Router from "vue-router";
import VueTippy from "vue-tippy";

import GlobalComponent from "./util/globalComponent";

Vue.use(Router)
Vue.use(GlobalComponent);

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
