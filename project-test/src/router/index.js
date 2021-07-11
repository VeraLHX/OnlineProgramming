import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest from '@/components/RouterT'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/router/:userID/name/:userName',
      name:'user',
      component:RouterTest,
      meta:{title:'路由'}
    }
  ],
  mode:'history'  //去掉#号
})
