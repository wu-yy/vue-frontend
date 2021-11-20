/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/styles/index.scss' // global css

Vue.use(ElementUI)
Vue.prototype.$ajax = axios
import global_ from './Base.vue'
import api from './http/api'
// import api from './api'
import { message } from './utils/message'

Vue.prototype.GLOBAL = global_;
Vue.prototype.$api = api
Vue.prototype.$message = message
axios.defaults.baseURL=global_.BASE_URL;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
