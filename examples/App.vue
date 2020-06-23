<template>
  <div class="px-container">
    <div class="header">
      <router-link :to="item.link" v-for="item of links" :key="item.name">{{
        item.name
      }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      links: [
        {
          link: "/spinner",
          name: "大转盘"
        },
        {
          link: "/lottery",
          name: "抽奖"
        }
      ]
    };
  }
};
</script>
<style lang="stylus"></style>
