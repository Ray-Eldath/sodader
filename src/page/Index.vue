<template>
    <div class="page" style="height: 100%">
        <div class="container flex-column">
            <div class="header">
                <div class="avatar flex-column">
                    <img src="../../assert/avatar.jpeg" alt="Ray Eldath"/>

                    <span class="name">Ray Eldath</span>
                </div>

                <div id="typing" class="flex-column">
                    <div id="_typed">
                        <!-- @formatter:off -->
                        <div id="_typed-strings">
                            <p></p> <!-- 启动闪烁效果 -->
                            <p>^500一个最笨的大笨蛋^600</p>
                            <p>一个<del>理性</del>浪漫主义者^1000</p>
                            <p>一个<u>半吊子</u>幻迷^500</p>
                            <p>一个垃圾鼓手^400</p>
                            <p>一个<span style="color: red"><strong>贫下中农</strong></span>^1000</p>
                            <p>一个<i>一事无成</i>的人^1000</p>
                            <p>^10在<u>不喜欢的城市</u>的<u>不喜欢的大学</u>里<span style="color: red"><strong>垫底</strong></span>^1000
                            </p>
                            <p>^10在<u>不喜欢的大学</u>的<u>不喜欢的专业</u>里<span style="color: red"><strong>挂科</strong></span>^1000
                            </p>
                            <p><span style="color: red"><s><strong>^3000一个死于萨乌达德的人</strong></s></span>^2000</p>
                        </div>
                        <!-- @formatter:on -->
                        <span></span>
                    </div>

                    <span class="counter">
                        <template v-if="!descriptionEnde">
                            {{ description.total }} / {{ description.now }}
                        </template>
                        <template v-else>
                            ende.
                        </template>
                    </span>
                </div>
            </div>
            <div class="buttons">
                <a class="button colored" href="/timeline">时间线</a>
                <a class="button" href="/articles">文章</a>
                <a class="button" href="/nowhere">碎碎念</a>
                <a class="button" href="/about">关于 / 朋友们</a>
            </div>
            <div class="construction">
                <transition name="fade" leave-active-class="fade-leave">
                    <div
                        v-if="descriptionEnde"
                        style="margin-top: 1.5em; font-size: 1.5em; font-weight: bold; font-family: 'Noto Serif SC', serif"
                        class="flex-column"
                    >
                        <span>余下组件仍在编写...</span>
                        <span style="margin-top: 0.4em">
                            期待完成后能见到你。
                        </span>
                    </div>
                </transition>
            </div>
            <div class="routes">
                <icon
                    content="我的GitHub"
                    v-tippy
                    href="https://github.com/Ray-Eldath"
                    name="mark-github"
                    :size="25"
                ></icon>
                <icon
                    content="我的邮箱"
                    v-tippy
                    href="mailto:ray-eldath@outlook.com"
                    name="mail-read"
                    :size="25"
                ></icon>
                <icon
                    content="我的知乎"
                    v-tippy
                    href="https://zhihu.com/people/eldath-ray"
                    type="iconfont"
                    name="zhihu"
                    :size="25"
                ></icon>
            </div>
            <div id="_particle" style="z-index: -1">
                <canvas></canvas>
            </div>
        </div>

        <div class="corner">
            <p>©. {{ years }}. Ray Eldath.</p>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=Noto+Serif+SC:400,700&display=swap&subset=chinese-simplified')
    @import "src/style/theme.sass"

    .page .container
        height: 100%

        .buttons
            width: 12em
            border-radius: 3px
            overflow: hidden
            @extend .flex-column

            .button
                width: 100%
                height: 2em
                line-height: 2em
                text-decoration: none
                text-align: center
                color: white
                background: rgba(46, 46, 46, 0.9)
                transition: 400ms

                &:hover
                    background: rgba(46, 46, 46, 0.95)

                &.colored
                    background: rgba($primary-color, 0.9)

                    &:hover
                        background: rgba($primary-color, 1)

        .routes
            position: absolute
            bottom: 0.8em

            .icon
                margin-left: 24px
                opacity: 0.4
                transition: 500ms ease

                &:hover
                    opacity: 0.7

                &:first-child
                    margin-left: 0

        .header
            padding: 1em 0 1em 0
            width: 100%
            color: black
            font-size: 2em

            .avatar
                margin-top: -4.5em

                .name
                    font-size: 1.25em
                    font-weight: bold
                    margin-bottom: 20px

                img
                    border: solid rgba(219, 237, 243, 0.6) 5px
                    border-radius: 100%
                    margin-bottom: 12px

        #typing
            .counter
                margin-top: 5px
                font-size: 0.4em
                opacity: 0.2

        #_particle
            position: fixed
            height: 100%
            width: 100%

    .flex
        display: flex
        justify-content: center
        align-items: center

    .flex-column
        @extend .flex
        flex-direction: column

    .page .corner
        position: fixed
        left: 0.2rem
        bottom: -0.7rem
        opacity: 0.3
        font-size: .8em
</style>

<style lang="sass">
    html, body
        height: 100%

        body
            margin: 0
</style>

<script>
    import Typed from "typed.js";
    import Particles from "particlesjs";

    export default {
        mounted() {
            const outer = this;

            new Typed("#_typed > span", {
                stringsElement: "#_typed #_typed-strings",
                cursorChar: "_",
                typeSpeed: 80,
                backSpeed: 45,
                onBegin(self) {
                    outer.description.total += self.strings.length;
                },
                onStringTyped(arrayPos, self) {
                    outer.description.now++;
                }
            });

            Particles.init({
                selector: "#_particle canvas",
                color: ["#DBEDF3", "#404B69", "#0b569c"],
                connectParticles: true,
                speed: 0.08,
                maxParticles: 120,
                minDistance: 60
            });
        },
        computed: {
            descriptionEnde() {
                return this.description.total <= this.description.now;
            },
            years() {
                let now = new Date().getFullYear();
                if (now === 2019) return `2019`;
                else return `2019 - ${now}`;
            }
        },
        data() {
            return {
                description: {
                    total: -1, // 纠正空p标签
                    now: -1
                },
                config: {
                    routesTippy: {
                        placement: "bottom"
                    }
                }
            };
        }
    };
</script>
