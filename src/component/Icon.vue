<template>
    <div class="icon" :class="iconClass" v-html="iconContent"></div>
</template>

<script>
import octicons from "@primer/octicons";
import iconfont from "../util/iconfont";

export default {
    name: "Icon",
    props: {
        type: {
            type: String,
            default: "octicons"
        },
        name: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 16
        },
        height: {
            type: Number,
            default: 16
        }
    },
    computed: {
        iconClass() {
            return `icon-${this.type}`;
        },
        iconContent() {
            if (this.type == "octicons") {
                let d = octicons[this.name];
                if (d != undefined)
                    return d.toSVG({ width: this.width, height: this.height });
                else this.console404();
            } else if (this.type == "iconfont") {
                let d = iconfont(this.name, this.width, this.height);
                if (d != undefined) return d;
                else this.console404();
            }
            return "";
        }
    },
    methods: {
        console404() {
            console.warn(
                `[Icon] icon ${this.name} not found in icon package ${this.type}.`
            );
        }
    }
};
</script>

<style lang="sass" scoped>
.icon
    display: inline-block
</style>