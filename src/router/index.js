import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/ChangeCity.vue'
import goodsList from '@/page/goodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name', // 通过name来实现跳转
          // 你是
          name: 'goods',
          component: goodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        }, {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }]
    }
  ]
})
