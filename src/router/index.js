import Vue from 'vue'
import Router from 'vue-router'
import dd from '../pages/dd'
import home from '../pages/home'
import search from '../pages/search'
import users from '../pages/users'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/dd',
      component: dd
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/user',
      component: users
    }
  ]
})
