import Icon from "../component/Icon";
import { TippyComponent } from "vue-tippy";

const plugins = {
    install(Vue) {
        Vue.component("icon", Icon);
        Vue.component("tippy", TippyComponent);
    }
};

export default plugins;
