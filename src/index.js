import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app.vue'
import store from '@store'
import router from '@router'
import axios from 'axios'
import utils from '@utils'
import * as directives from '@common/directive'

import '@assets/less/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'

Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.prototype.$axios.proxy = utils.proxy
Vue.prototype.$utils = utils

//axios请求拦截
axios.interceptors.request.use(config => {
  if (config.data) {
    let configData = JSON.parse(JSON.stringify(config.data));
    config.url += `?url=${configData.url}&time=${Date.now()}`;
  }
  return config
}, error => {
  return Promise.reject(error)
})

//axios响应拦截
axios.interceptors.response.use(response => {
  let res = response.data,
    code = res.code
  return res
}, error => {
  return Promise.reject(error)
})

//注册公共指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')