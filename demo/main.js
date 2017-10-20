/* eslint-disable no-unused-vars */

'use strict'

import Vue from 'vue'
import App from './App.vue'

Vue.config.devtools = true

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
