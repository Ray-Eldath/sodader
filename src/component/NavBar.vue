<template>
    <div class="nav">
        <div class="box">
            <div class="header">
                <div class="title">未命名 <span class="at">@ Ray Eldath's Blog</span></div>
                <div class="motto">我仍在找寻存在的意义和价值。</div>
            </div>
            <div class="entries">
                <div class="entry" v-for="(route, i) in routes" :key="route.path">
                    <router-link
                        class="link"
                        :to="{ name: route.name }"
                        :class="{ current: route.name === $route.name} ">{{ route.name }}
                    </router-link>
                    <span v-if="i < routes.length - 1" class="delimiter">/</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import "src/style/theme.sass"

    .nav
        position: sticky
        border-bottom: dashed 15px $dark-color
        background: rgba(white, 0.8)

        .box
            display: flex
            flex-direction: row
            padding: 40px 40px 20px 40px

        .header
            flex-grow: 1
            color: rgba(black, 1)
            font-size: 50px
            margin-bottom: 1.6em

            .motto
                text-shadow: rgba(0, 0, 0, 0.14) 1px 1px 5px
                font-size: 0.43em
                margin-top: 5px

            .title
                text-shadow: rgba(186, 249, 255, 0.4) 1px 1px 4px
                color: $primary-color
                font-weight: bold

                .at
                    font-weight: 500
                    opacity: 0.4

        .entries
            margin-top: auto

            .entry
                display: inline
                font-size: 18px

                .link
                    transition: font-size 500ms ease
                    text-decoration: none
                    color: rgba(black, 0.6)

                    &:hover
                        color: $primary-color
                        font-weight: bold

                .current
                    color: $primary-color !important
                    font-size: 2.4em
                    font-weight: bold

        .delimiter
            margin: 5px
            color: rgba(black, 0.2)
</style>

<script>
    export default {
        computed: {
            routes() {
                return this.$router.options.routes;
            }
        },
        name: "HeadBar"
    };
</script>