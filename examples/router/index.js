import Router from "vue-router";
import Vue from "vue";
import PxSpinner from "../../packages/spinner";
import PxLottery from "../../packages/lottery_draw";

Vue.use(Router);
const routes = [
  { path: "/spinner", component: PxSpinner },
  { path: "/lottery", component: PxLottery }
];
const router = new Router({
  routes // (缩写) 相当于 routes: routes
});

export default router;
