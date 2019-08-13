import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout/layout'
import jscookie from 'js-cookie'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home/home')
        },
        {
          path: 'parttime',
          name: 'parttime',
          component: () => import('@/pages/parttime/parttime')
        },
        {
          path: 'fulltime',
          name: 'fulltime',
          component: () => import('@/pages/fullTime/fullTime')
        },
        {
          path: 'jobFair',
          name: 'jobFair',
          component: () => import('@/pages/jobFair/jobFair')
        },
        {
          path: 'community',
          name: 'community',
          component: () => import('@/pages/community/community'),
          meta: {
            requiredauth: true
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/login/login')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('@/pages/feedback/feedback'),
          meta: {
            requiredauth: true
          }
        },
        {
          path: 'postdetail',
          name: 'postdetail',
          component: () => import('@/pages/postdetail/postdetail'),
          meta: {
            requiredauth: true
          }
        },
        {
          path: 'findpw',
          name: 'findpw',
          component: () => import('@/pages/findpw/findpw')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/register/register')
        },
        {
          path: 'createresume',
          name: 'createresume',
          component: () => import('@/pages/createresume/createresume'),
          meta: {
            requiredauth: true
          }
        },
        {
          path: 'selfcenter',
          name: 'selfcenter',
          component: () => import('@/pages/selfcenter/selfcenter'),
          meta: {
            requiredauth: true
          }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/pages/about/about'),
          meta: {
            requiredauth: true
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = jscookie.get('token')
  if (to.meta.requiredauth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else { next() }
})

export default router
