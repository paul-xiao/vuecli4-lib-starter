<template>
  <button class="px-input">
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
    }
  }
};
</script>
