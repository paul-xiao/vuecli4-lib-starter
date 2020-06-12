import Vue from "vue";
import App from "./App.vue";
// 导入组件库
import pxui from "../src/index";
import router from "./router";
// 注册组件库
Vue.use(pxui);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
