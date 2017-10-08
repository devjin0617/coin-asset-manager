import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import LoginPage from '@/pages/LoginPage'
import AssetPage from '@/pages/AssetPage'
import AssetList from '@/components/AssetList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Asset',
      redirect: { name: 'Main' }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/main',
      name: 'Main',
      component: AssetPage,
      children: [
        {
          path: 'aseets',
          component: AssetList
        }
      ]
    }
  ]
})
