import Vue from 'vue'
import Router from 'vue-router'
// import helloWorld from '@/components/HelloWorld'
import errorPage from '@/components/errorPage'

import dayRecords from '@/view/dayRecords' //日历

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'dayRecords',
    component: dayRecords
  }, {
    path: '/errorPage',
    name: 'errorPage',
    component: errorPage
  }, {
    path: '/dayRecords',
    name: 'dayRecords',
    component: dayRecords
  }]
})
