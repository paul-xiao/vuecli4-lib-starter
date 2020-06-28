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
          link: "/palette",
          name: "palette"
        },
        {
          link: "/button",
          name: "button"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$router.options.routes);
  }
};
</script>
<style lang="stylus">
.header
  border-bottom 1px solid
  padding 15px 0
  margin-bottom 15px
  a
   margin 5px
</style>
