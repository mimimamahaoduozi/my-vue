import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/'
import About from '@/pages/about/About'
import About3 from '@/pages/about/about3'
import List from '@/pages/list/List'
import music from '@/pages/active/music'
import musiccon from '@/pages/active/musicCon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/about',
      component: About,
      children: [
        {path: '/about/:newId', component: About3}
      ]
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/Active',
      component: music
    },
    {
      path: '/Active/:musicid',
      component: musiccon
    }
  ]
})
