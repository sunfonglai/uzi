import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/pages/pf/login/login.vue'
import Home from '@/views/pages/pf/home/home.vue'
import Test from '@/views/pages/pf/test/test.vue'
import SyncPlan from '@/views/pages/pf/syncData/syncPlan.vue'
import SyncPlanDetail from '@/views/pages/pf/syncData/syncPlanDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/SyncPlan',
      name: 'SyncPlan',
      component: SyncPlan
    },
    {
      path: '/SyncPlanDetail',
      name: 'SyncPlanDetail',
      component: SyncPlanDetail
    }
  ]
})
