import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/iconfont.css'
import './assets/style/common.less'
import './plugins/element.js'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.state.isHtml = /\/login/.test(to.path)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')