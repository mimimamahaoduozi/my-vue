import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Axios from 'axios'
// Vue.prototype.axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
