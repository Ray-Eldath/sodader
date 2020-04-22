<template>

    <div v-if="$route.meta.plain" style="height: 100%">
        <FadeTransition>
            <router-view></router-view>
        </FadeTransition>
    </div>
    <div class="page" v-else>
        <div class="container">
            <div class="nav-bar">
                <NavBar/>
            </div>

            <div class="content">
                <FadeTransition>
                    <router-view class="view"></router-view>
                </FadeTransition>

                <div class="bottom-line"></div>
                <div style="text-align: center; padding: 10px 0; color: rgba(0, 0, 0, 0.3)">🎇 ENDE~</div>
            </div>
        </div>

        <div id="_particle_page" style="z-index: -1">
            <canvas></canvas>
        </div>
    </div>
</template>

<script>
    import NavBar from "./component/NavBar";
    import FadeTransition from "./component/FadeTransition";
    import Particles from "particlesjs";

    export default {
        mounted() {
            Particles.init({
                selector: "#_particle_page canvas",
                color: ["#d6f8fc", "#404b69", "#0b569c"],
                connectParticles: true,
                speed: 0.1,
                maxParticles: 250,
                minDistance: 60
            });
        },
        components: { NavBar, FadeTransition }
    };
</script>

<style lang="sass" scoped>
    @import "src/style/theme"

    .page
        height: 100%
        display: flex
        justify-content: center

        .container
            width: 60%
            display: flex
            flex-direction: column

            .content
                flex-grow: 1
                padding: 1rem 2rem
                background: white
                border: solid 20px $dark-color
                border-top: 0
                border-bottom: 0

                .bottom-line
                    padding-top: 20px
                    border-bottom: solid 1px rgba($dark-color, 0.2)
</style>

<style lang="sass">
    body
        font-family: 'Noto Sans SC', sans-serif

        #_particle_page
            height: 100%
            width: 100%
            position: fixed
</style>

<style lang="sass">
    .tippy-popper
        .tippy-tooltip
            padding: .36rem .4rem
            line-height: 1
            font-size: .8rem
</style>
