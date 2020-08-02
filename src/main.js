import Vue from "vue"
import App from "./App.vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import Clipboard from 'v-clipboard'
import InputFacade from 'vue-input-facade'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Clipboard)
Vue.use(InputFacade)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app");
