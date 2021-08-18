import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LayoutIndex from '@/views/Layout'
import JavaScriptIndex from '@/views/JavaScriptPage'
import webPageIndex from '@/views/webPage'
import NodeIndex from '@/views/NodeJs'
import VueJsIndex from '@/views/VueJs'

const routes = [
  {
    path: '/',
    component: LayoutIndex,
    children: [
      {
        path: '', // path为空，会作为默认子路由渲染
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/webpage',
        name: 'webpage',
        component: webPageIndex
      },
      {
        path: '/javaScriptPage',
        name: 'javaScriptPage',
        component: JavaScriptIndex
      },
      {
        path: '/nodeJs',
        name: 'nodeJs',
        component: NodeIndex
      },
      {
        path: '/vueJs',
        name: 'vueJs',
        component: VueJsIndex
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
