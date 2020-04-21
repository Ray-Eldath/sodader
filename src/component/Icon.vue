<template>
    <a
            v-if="href"
            :href="href"
            class="icon"
            target="_blank"
            rel="noopener noreferrer"
    >
        <div :class="iconClass" v-html="iconContent"></div>
    </a>
    <div v-else class="icon" :class="iconClass" v-html="iconContent"></div>
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
            size: {
                type: Number,
                default: 16
            },
            href: {
                type: String,
                required: false
            }
        },
        computed: {
            iconClass() {
                return `icon-${this.type}`;
            },
            iconContent() {
                if (this.type === "octicons") {
                    let d = octicons[this.name];
                    if (d !== undefined)
                        return d.toSVG({ width: this.size, height: this.size });
                    else this.console404();
                } else if (this.type === "iconfont") {
                    let d = iconfont(this.name, this.size, this.size);
                    if (d !== undefined) return d;
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