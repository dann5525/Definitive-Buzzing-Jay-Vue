import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import OnBoarding111 from './views/on-boarding111'
import Dashboard from './views/dashboard'
import OnBoarding11 from './views/on-boarding11'
import OnBoarding1 from './views/on-boarding1'
import Home1 from './views/home1'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'OnBoarding111',
      path: '/on-boarding111',
      component: OnBoarding111,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'OnBoarding11',
      path: '/on-boarding11',
      component: OnBoarding11,
    },
    {
      name: 'OnBoarding1',
      path: '/on-boarding1',
      component: OnBoarding1,
    },
    {
      name: 'Home1',
      path: '/',
      component: Home1,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
