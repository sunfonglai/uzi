import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/pages/plf/login/login.vue'
import Home from '@/views/pages/plf/home/home.vue'
import LeftMenu from '@/views/pages/plf/home/leftMenu.vue'
import Test from '@/views/pages/plf/test/test.vue'
import SyncPlan from '@/views/pages/plf/syncData/syncPlan.vue'
// import SyncPlanDetail from '@/views/pages/pf/syncData/syncPlanDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page/',
      name: 'Login',
      component: Login
    },
    {
      path: '/page/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/page/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/page/SyncPlan',
      name: 'SyncPlan',
      component: SyncPlan
    },
    {
      path: '/page/LeftMenu',
      name: 'LeftMenu',
      component: LeftMenu
    }
  ]
})
