<template>
  <button class="px-btn" :class="[type ? 'px-btn--' + type : '']">
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
export default {
  name: "PxButton",
  props: {
    text: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="stylus">
//
</style>
