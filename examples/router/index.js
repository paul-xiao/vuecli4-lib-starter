import Router from "vue-router";
import Vue from "vue";
import button from "../pages/button.vue";
import palette from "../pages/palette.vue";

Vue.use(Router);
const routes = [
  { path: "/button", component: button },
  {
    path: "/palette",
    component: palette
  }
];
const router = new Router({
  routes // (缩写) 相当于 routes: routes
});

export default router;
