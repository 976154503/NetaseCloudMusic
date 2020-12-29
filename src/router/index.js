import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const Rank = () => import('@/views/Rank')
const Search = () => import('@/views/Search')

const routes = [
  {
    path: '/recommend',
    comments: Recommend
  },
  {
    path: '/singer',
    comments: Singer
  },
  {
    path: '/rank',
    comments: Rank
  },
  {
    path: '/search',
    comments: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
