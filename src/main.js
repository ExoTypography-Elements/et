import Vue from 'vue'
import Eqcss from 'eqcss'
import App from './App.vue'
import router from './router'
//Import the app's store
import store from './vuex/store'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})












