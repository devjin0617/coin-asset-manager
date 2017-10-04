import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import LoginPage from '@/pages/LoginPage'
import AssetPage from '@/pages/AssetPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Asset',
      component: AssetPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})
