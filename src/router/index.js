import Vue from 'vue'
import Router from 'vue-router'

import logIn from '@/components/logIn'
import index from '@/components/index'
import text1 from '@/components/serveComponent/text/text1'
Vue.use(Router)
export default new Router({
  routes: [
    // 登录
    {
      path: '/',
      name: 'logIn',
      component: logIn,
      meta: {
        title: '登录'
      }
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },

    {
      path: '/text1',
      name: 'text1',
      component: text1,
      meta: {
        title: 'ceshi'
      }
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
