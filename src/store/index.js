import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  state: {
    isHtml: true
  }
})

export default store