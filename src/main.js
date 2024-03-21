import 'babel-polyfill'
import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import App from './App'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Clipboard from 'v-clipboard'

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(IconsPlugin);
Vue.use(Clipboard);
Vue.config.productionTip = false

/*   Filters let you define functions that can be used to do common Javascript things
     inside template moustaches {{}} with the | operator */
     Vue.filter('capitalize', function(value){
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
 })

// Modify Vee-Validate dictionary for custom (static) messages
const dictionary = {
  en:{
    messages: {
      _default: ()=> 'The entered value is not valid.',
      date_format: ()=> ('This field must be in the format MM-DD-YYYY.'),
      email: ()=> 'This field must be a valid email address.',
      required: ()=> ('This field is required.'),
      numeric: ()=> ('Only numeric characters are allowed.'),
      length:()=> ('This field requires exactly 5 characters.') 
    }
  }
};
Validator.localize(dictionary);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
