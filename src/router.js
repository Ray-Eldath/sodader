import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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
