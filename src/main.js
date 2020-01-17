import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {i18n} from './i18n/config'
import 'babel-polyfill' // 兼容旧浏览器
import wow from 'wowjs'

import 'animate.css'
Vue.config.productionTip = false;

new Vue({
  router,
	i18n,
  store,
  render: h => h(App)
}).$mount("#app");
