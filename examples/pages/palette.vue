<template>
  <div class="app">
    <span class="primary">primary</span>
    <span class="secondary">secondary</span>
    <span class="accent">accent</span>
    <span class="error">error</span>
    <span class="warning">warning</span>
    <span class="info">info</span>
    <span class="success">success</span>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: "px-button"
  })
};
</script>
<style lang="stylus" scoped>
// $primary = #673ab7
// $secondary= #9c27b0
// $accent= #ffc107
// $error= #cddc39
// $warning= #ff5722
// $info= #795548
// $success= #3f51b5
block(bg = $primary) {
  background bg
  font-size 12px
  width 50px
  margin 5px
  display inline-block
  text-align center
  padding 15px
  color white
}
.app
  padding 0
span
.primary
  block()
.secondary
  block($secondary)
.accent
  block($accent)
.error
  block($error)
.warning
  block($warning)
.info
  block($info)
.success
  block($success)
</style>
