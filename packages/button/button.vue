<template>
  <button class="px-btn"><slot></slot></button>
</template>
<script>
export default {
  name: "PxButton"
};
</script>
<style lang="stylus" scoped>
@import '../../src/styles/components/button.styl'
</style>
