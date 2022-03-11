import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import pxui from '../lib/pxui'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'

Vue.use(ElementUI)
// Vue.use(pxui)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
