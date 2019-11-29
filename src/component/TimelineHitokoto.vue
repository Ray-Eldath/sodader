<template>
  <div class="hitokoto">
    <div>{{ content }}</div>
    <div>—— {{ source }}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
    source: { type: String }
  }
};
</script>

<style lang="less" scoped>
</style>