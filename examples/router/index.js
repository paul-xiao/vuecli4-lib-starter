import Vue from 'vue'
import VueRouter from 'vue-router'
//router.js导入生成好的路由规则
import routerRoutes from "./routes";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerRoutes,//导入自动生成的所有路由规则
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
});
export default router
