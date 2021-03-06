// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import './assets/stylesheets/base.css'
Vue.use(VueBlu)

import Firebase from 'firebase'
import FBconfig from './config/FBConfig'
let FirebaseApp = Firebase.initializeApp(FBconfig)
Vue.prototype.Firebase = FirebaseApp

import VueFire from 'vuefire'
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
