import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载 通过函数的形式加载router节省性能
const Recommend = () => import('../views/Recommend')
const Singer = () => import('../views/Singer')
const Rank = () => import('../views/Rank')
const Search = () => import('../views/Search')
const Details = () => import('../views/Details')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [{
      // 子路由节点不用加 /  例如/details 如果添加路由会默认寻找根路径导致页面无法挂载
      path: 'details/:id',
      component: Details
    }]
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
