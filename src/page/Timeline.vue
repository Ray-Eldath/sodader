<template>
    <div id="timeline">
        <template v-for="i in timeline">
            <div class="block" v-if="i.type === 0">
                <Article
                    :id="i.id"
                    :title="i.title"
                    :date="i.date"
                    :abstract="i.abstract"
                />
            </div>
            <div class="block" v-else-if="i.type === 1">
                <Hitokoto :content="i.content" :source="i.source"/>
            </div>
        </template>
    </div>
</template>

<style lang="sass" scoped>
    #timeline
        .block
            margin-top: 1em

            &:first-child
                margin-top: 0
</style>

<script>
    import Article from "../component/TimelineArticle";
    import Hitokoto from "../component/TimelineHitokoto";
    import { timeline } from "../util/MockData";

    export default {
        data() {
            return {
                timeline: timeline
            };
        },
        components: { Article, Hitokoto }
    };
</script>
