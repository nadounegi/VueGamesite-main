import Vue from 'vue';
import App from './App.vue';
import Navigation from '@/views/Navigation.vue';
import Lunbo from './components/Lunbo.vue';
import CartItem from './components/CartItem.vue';
import CateTitle from './components/CateTitle.vue';
import router from './router'; 

Vue.config.productionTip = false;
Vue.component('Navigation', Navigation);
Vue.component('Lunbo', Lunbo);
Vue.component('CartItem', CartItem);
Vue.component('CateTitle', CateTitle);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
