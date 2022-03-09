import DynamicPie from './charts'
import BasicForm from './form'
import Button from './Button'
import { prefix } from '../config'
// import './styles/common.scss'
const components = { DynamicPie, BasicForm, Button }

for (const [key, value] of Object.entries(components)) {
  value.install = vue => {
    vue.component(`${prefix}${key}`, value)
  }
}

const install = function (Vue) {
  if (install.installed) return
  Object.entries(components).forEach(([key, val]) => {
    Vue.component(`${prefix}${key}`, val)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
