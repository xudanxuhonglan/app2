import Vue from 'vue'
import Router from 'vue-router'

//引进组件
import TakeOutFood from '../components/take-out-food.vue'
import Search from '../components/search.vue'
import Order from '../components/order.vue'
import PersonalCenter from '../components/personal-center.vue'
import Shop from '../components/shop.vue'

//将下载的插件写入vue（不写进去就用不了）
Vue.use(Router)

export default new Router({
  routes: [
    {
        name:'TakeOutFood',
		path:'/take-out-food',
		component:TakeOutFood
    },
	{
	    name:'Search',
		path:'/search',
		component:Search
	},
	{
	    name:'Order',
		path:'/order',
		component:Order
	},
	{
	    name:'PersonalCenter',
		path:'/personal-center',
		component:PersonalCenter
	},
	{
	    name:'shop',
		path:'/shop',
		component:Shop
	},
	{
	    name:'Redirect',
		path:'*',
		redirect:'/take-out-food'
	}
  ]
})
