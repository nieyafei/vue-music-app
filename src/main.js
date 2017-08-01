// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
/* 引入scss */
import './style/scss/index.scss'
Vue.config.productionTip = false
/* eslint-disable no-new */
/* 300ms延迟 */
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
