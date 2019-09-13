export default [
  {
    path: '/403',
    name: '403',
    component: resolve => require([`@view/error/403.vue`], resolve),
    meta: {
      title: '没权限访问',
      describe: '没权限访问'
    }
  },
  {
    path: '/404',
    name: '404',
    component: resolve => require([`@view/error/404.vue`], resolve),
    meta: {
      title: '页面不存在',
      describe: '页面不存在'
    }
  }
]