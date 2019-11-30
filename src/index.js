import Vue from "vue";
import App from "./App.vue";

import router from "./router";

require("vue2-animate/dist/vue2-animate.min.css");

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
