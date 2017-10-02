import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import LoginPage from '@/pages/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})
