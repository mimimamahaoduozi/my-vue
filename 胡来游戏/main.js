import Vue from 'vue'
import App from './App'
import Header from './components/public/Header'

import router from './router'
import store from './store/store'
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    Header
  },
  template: '<div><Header/><App/></div>'
})
