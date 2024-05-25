import Vue from 'vue';
import App from './App.vue';
import router from './router'; 

//コンポーネントをグローバル登録
import Navigation from '@/components/Navigation.vue';
import Lunbo from '@/components/Lunbo.vue';
import CartNav from '@/components/CartNav.vue';
import CartItem from '@/components/CartItem.vue';
import CateTitle from '@/components/CateTitle.vue';
import Mall from '@/views/Mall.vue';
import MallTop from '@/views/MallTop.vue';
// ナビリストをグローバル登録
import BreadCrumb from '@/components/BreadCrumb.vue';
//画像のパスをグローバル登録
import Uncarted4 from '@/assets/images/Uncharted4.png';
import Biohazard4 from '@/assets/images/バイオハザード４.png';
import RyuGaGotoku8 from '@/assets/images/龍が如く８.png';
import SandLand from '@/assets/images/SandLand.png';
import Splatoon3 from '@/assets/images/スプラトゥーン３.png';
import Mario8 from '@/assets/images/マリオカート8.png';
import PaperMario from '@/assets/images/ペーパーマリオRPG.png';
import Zelda from '@/assets/images/ゼルダの伝説.png';
import HaloInfinite from '@/assets/images/HaloInfinite.png';
import ForzaMotorsport from '@/assets/images/ForzaMotorsport.png';
import MinecraftLegends from '@/assets/images/MinecraftLegends.png';
import DeadSpace from '@/assets/images/DeadSpace.png';
import FF14 from '@/assets/images/ファイナルファンタジーXIV.png';
import LittleNightmare from '@/assets/images/リトルナイトメア.png';
import TalesofARISE from '@/assets/images/TalesofARISE.png';
import Katamari from '@/assets/images/塊魂.png';

Vue.config.productionTip = false;
//画像のパスをVueインスタンスのプロパティに登録
Vue.prototype.$imgUrl = {
  Uncarted4,
  Biohazard4,
  RyuGaGotoku8,
  SandLand,
  Splatoon3,
  Mario8,
  PaperMario,
  Zelda,
  HaloInfinite,
  ForzaMotorsport,
  MinecraftLegends,
  DeadSpace,
  FF14,
  LittleNightmare,
  TalesofARISE,
  Katamari
};

Vue.component('Navigation', Navigation);
Vue.component('Lunbo', Lunbo);
Vue.component('CartNav', CartNav);
Vue.component('CartItem', CartItem);
Vue.component('CateTitle', CateTitle);
Vue.component('MallTop',MallTop)
Vue.component('Mall',Mall);
Vue.component('BreadCrumb',BreadCrumb);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
