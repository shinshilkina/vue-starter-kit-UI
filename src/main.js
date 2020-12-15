import Vue from 'vue'

import App from './App.vue'
import store from './store/store';
import VueRouter from 'vue-router';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
