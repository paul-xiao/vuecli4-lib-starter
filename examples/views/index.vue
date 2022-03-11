<template>
  <div class="p-5">
    <div class="flex">
      <div class="px-5 mr-5 w-80">
        <h1>基础组件</h1>
        <h5 class="font-light">Components</h5>
        <ul class="mt-5">
          <li
            v-for="item of components"
            :key="item.name"
            class="p-2 font-thin leading-5 rounded-sm cursor-pointer hover:bg-gray-200"
            @click="$route.name !== item.name && $router.push({ name: item.name })"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      components: []
    }
  },
  mounted() {
    const routes = this.$router.options.routes
    console.log(routes[1].children)
    this.components = routes[1].children[0].children
  }
}
</script>
