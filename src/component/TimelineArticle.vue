<template>
    <div class="article">
        <div>{{ title }}</div>
        <div>{{ date }}</div>
        <div v-if="abstract">{{ abstract }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            date: { type: String, required: true },
            abstract: { type: String }
        }
    };
</script>

<style lang="less" scoped>
</style>