// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引进MintUI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//引进elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引进vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


//把elementui注册到vue里
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
// Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
