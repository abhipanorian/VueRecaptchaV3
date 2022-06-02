import Vue from 'vue'
import App from './App.vue'

import { VueReCaptcha } from 'vue-recaptcha-v3'

// For more options see below
Vue.use(VueReCaptcha, { siteKey: '6Le2MDogAAAAAGfdzG2GXWXKOXDaHNqrwaF86igf' })


new Vue({
  el: '#app',
  render: h => h(App)
})
