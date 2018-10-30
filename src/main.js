// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Mock from './mock'

// import VueDatepickerLocal from '/src/views/pages/tools/times/VueDatepickerLocal.vue'
// // '../../tools/times/VueDatepickerLocal.vue'
// Vue.component('vue-datepicker-local', VueDatepickerLocal)

Vue.use(ElementUI)
Vue.use(router)
Vue.prototype.$ajax = axios

// 使用mock数据
// Mock.bootstrap()

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8110' : 'http://localhost:8110'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    navMenuList: ''
  }
})
