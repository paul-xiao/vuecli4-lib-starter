import PxButton from "../packages/button";
import PxSpinner from "../packages/spinner";
import PxLottery from "../packages/lottery_draw";

const components = [PxButton, PxSpinner, PxLottery];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// export all as plugin
export default {
  install
};

// export seperate components
export { PxButton, PxSpinner, PxLottery };
