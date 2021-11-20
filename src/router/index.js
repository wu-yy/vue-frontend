import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import Search from '@/components/Search'
// import Index from '@/compsonents/Index'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path:'/',
    name: '主页',
    redirect: '/news',
    hidden: true,
  },
  {
    path: '/news',
    name: '消息',
    redirect: '/news/index',
    hidden: true,
    component: () => import('@/views/news/layout/index'),
    children: [
      {
        path: 'index',
        name: '资讯摘要',
        component: () => import('@/views/news/home/index')
      },
      {
        path: 'analysis',
        name: '数据分析',
        component: () => import('@/views/news/home/analysis')
      }
    ]
  },
    //
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
