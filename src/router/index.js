import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const route = new VueRouter({

	routes:[{
    path:'/index',component:require('../views/index.vue')
  },{
    path:'/about',component:require('../views/about.vue')
  },{
    path:'/elements',component:require('../views/elements.vue')
  },{
    path:'/earth',component:require('../views/earth.vue')
  },{
    path:'/fire',component:require('../views/fire.vue')
  },{
    path:'/water',component:require('../views/water.vue')
  },{
    path:'/air',component:require('../views/air.vue')
  },{
    path:'/aether',component:require('../views/aether.vue')
  },{
    path:'*',redirect:'/index'
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


export default route;