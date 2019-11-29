<template>
    <div id="timeline">
        <div v-for="i in timeline" :key="i.id">
            <div class="block" v-if="i.type === 0">
                <Article
                    :id="i.id"
                    :title="i.title"
                    :date="i.date"
                    :abstract="i.abstract"
                />
            </div>
            <div class="block" v-else-if="i.type === 1">
                <Hitokoto :content="i.content" :source="i.source" />
            </div>
        </div>
    </div>
</template>

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

<style lang="less" scoped></style>
