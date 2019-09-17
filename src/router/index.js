import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@store'
import routes from './routes'

Vue.use(VueRouter)

//console.log(routes)

//定义路由
const router = new VueRouter({
  mode: process.env.NODE_ENV == 'development' ? 'hash' : 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : {
      x: 0,
      y: 0
    }
  },
})

//路由权限控制 - 进入前
// router.beforeEach((to, from, next) => {
//   next()
// })

//路由权限控制 - 进入后
router.afterEach((to, from) => {

})

export default router