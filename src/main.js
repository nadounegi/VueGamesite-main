import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
import Navigation from '@/components/Navigation.vue';
import Lunbo from '@/components/Lunbo.vue';
import CartItem from '@/components/CartItem.vue';
import CateTitle from '@/components/CateTitle.vue';
import Mall from '@/views/Mall.vue';
import MallTop from '@/views/MallTop.vue';

Vue.config.productionTip = false;

Vue.component('Navigation', Navigation);
Vue.component('Lunbo', Lunbo);
Vue.component('CartItem', CartItem);
Vue.component('CateTitle', CateTitle);
Vue.component('MallTop',MallTop)
Vue.component('Mall',Mall);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
