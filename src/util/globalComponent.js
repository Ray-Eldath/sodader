import Icon from "../component/Icon";

const plugins = {
    install(Vue) {
        Vue.component("icon", Icon);
    }
};

export default plugins;
