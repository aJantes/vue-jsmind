import Vue from 'vue'
import App from './App.vue'

import JsMind from '../dist/build'
Vue.use(JsMind)

new Vue({
  el: '#app',
  render: h => h(App)
})
