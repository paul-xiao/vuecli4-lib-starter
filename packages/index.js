import DynamicPie from './charts';
import BasicForm from './form';
import './theme/common.scss'
const components = [DynamicPie, BasicForm];
const install = function(Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.use(component);
    });
};
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    DynamicPie,
    BasicForm
};
export { DynamicPie, BasicForm };