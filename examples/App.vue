<template>
  <div class="px-container">
    <div class="header">
      <router-link to="/spinner">大转盘</router-link>&nbsp;
      <router-link to="/lottery">抽奖</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
@import ('../src/styles/index.styl');
</style>
