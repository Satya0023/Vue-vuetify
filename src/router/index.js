import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: () => import('../App.vue'),
  },
  {
    path: '/SidebarMenuAkahon', component: () => import('../components/Sidebar-menu-akahon.vue')
  },

  { path: '/card2', component: () => import('../components/card2.vue') },

  { path: '/card1', component: () => import('../components/card1.vue') },
  { path: '/card3', component: () => import('../components/card3.vue') },
  { path: '/card4', component: () => import('../components/card4.vue') },
  { path: '/card5', component: () => import('../components/card5.vue') },
  { path: '/card6', component: () => import('../components/card6.vue') },
  { path: '/card7', component: () => import('../components/card7.vue') },
  { path: '/card8', component: () => import('../components/card8.vue') },
  { path: '/card9', component: () => import('../components/card9.vue') },
  { path: '/card10', component: () => import('../components/card10.vue') },
  { path: '/foot', component: () => import('../components/foot.vue') },
  { path: '/home', component: () => import('../components/home.vue') },
]

const router = new VueRouter({

  routes
})

export default router
