<template>
    <div class="nav">
        <div class="box">
            <div class="header">未命名 @ Ray Eldath's Blog</div>
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
        height: 150px
        position: relative
        border: dashed 15px $primary-color
        background: rgba(white, 0.75)

        .box
            padding: 20px

        .header
            font-family: serif
            color: rgba(black, 1)

        .entries
            position: absolute
            bottom: 20px

            .entry
                display: inline
                font-size: 16px

                .link
                    transition: font-size 500ms ease
                    text-decoration: none
                    color: rgba(black, 0.6)

                    &:hover
                        color: $primary-color
                        font-weight: bold

                .current
                    color: $primary-color !important
                    font-size: 3em
                    font-weight: bold

        .delimiter
            margin: 5px
            color: rgba(black, 0.5)
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