// import { createApp } from 'vue'
import Vue from 'vue'

import request from './utils/request'

import App from './App.vue'

// createApp(App).mount('#app')
new Vue({
  render: (h) => h(App),
}).$mount('#app')
