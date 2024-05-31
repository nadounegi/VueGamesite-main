import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
//メソッドをグローバル化にするため
import mixins from './mixins.js'


//コンポーネントをグローバル登録
import imgLunbo from '@/components/imgLunbo.vue';
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
//小図片をグローバルに登録
import BIOHAZARD1 from '@/assets/images/BIOHAZARD1.png';
import BIOHAZARD2 from '@/assets/images/BIOHAZARD2.png';
import BIOHAZARD3 from '@/assets/images/BIOHAZARD3.png';
import BIOHAZARD4 from '@/assets/images/BIOHAZARD4.png';

import RYUGAGOTOKU1 from '@/assets/images/RYUGAGOTOKU1.png';
import RYUGAGOTOKU2 from '@/assets/images/RYUGAGOTOKU2.png';
import RYUGAGOTOKU3 from '@/assets/images/RYUGAGOTOKU3.png';
import RYUGAGOTOKU4 from '@/assets/images/RYUGAGOTOKU4.png';

import SandLand1 from '@/assets/images/SandLand1.png';
import SandLand2 from '@/assets/images/SandLand2.png';
import SandLand3 from '@/assets/images/SandLand3.png';
import SandLand4 from '@/assets/images/SandLand4.png';


import SPLATOON1 from '@/assets/images/SPLATOON1.png';
import SPLATOON2 from '@/assets/images/SPLATOON2.png';
import SPLATOON3 from '@/assets/images/SPLATOON3.png';
import SPLATOON4 from '@/assets/images/SPLATOON4.png';

import MARIOKART1 from '@/assets/images/MARIOKART1.png';
import MARIOKART2 from '@/assets/images/MARIOKART2.png';
import MARIOKART3 from '@/assets/images/MARIOKART3.png';
import MARIOKART4 from '@/assets/images/MARIOKART4.png';

import PAPER1 from '@/assets/images/PAPER1.png';
import PAPER2 from '@/assets/images/PAPER2.png';
import PAPER3 from '@/assets/images/PAPER3.png';
import PAPER4 from '@/assets/images/PAPER4.png';

import FORZA1 from '@/assets/images/FORZA1.png';
import FORZA2 from '@/assets/images/FORZA2.png';
import FORZA3 from '@/assets/images/FORZA3.png';
import FORZA4 from '@/assets/images/FORZA4.png';

import ZELDA1 from '@/assets/images/ZELDA1.png';
import ZELDA2 from '@/assets/images/ZELDA2.png';
import ZELDA3 from '@/assets/images/ZELDA3.png';
import ZELDA4 from '@/assets/images/ZELDA4.png';

import HALO1 from '@/assets/images/HALO1.png';
import HALO2 from '@/assets/images/HALO2.png';
import HALO3 from '@/assets/images/HALO3.png';
import HALO4 from '@/assets/images/HALO4.png';

import MINECRAFT1 from '@/assets/images/MINECRAFT1.png';
import MINECRAFT2 from '@/assets/images/MINECRAFT2.png';
import MINECRAFT3 from '@/assets/images/MINECRAFT3.png';
import MINECRAFT4 from '@/assets/images/MINECRAFT4.png';

import DEADSPACE1 from '@/assets/images/DEADSPACE1.png';
import DEADSPACE2 from '@/assets/images/DEADSPACE2.png';
import DEADSPACE3 from '@/assets/images/DEADSPACE3.png';
import DEADSPACE4 from '@/assets/images/DEADSPACE4.png';

import FINALFANTASY1 from '@/assets/images/FINALFANTASY1.png';
import FINALFANTASY2 from '@/assets/images/FINALFANTASY2.png';
import FINALFANTASY3 from '@/assets/images/FINALFANTASY3.png';
import FINALFANTASY4 from '@/assets/images/FINALFANTASY4.png';

import Little1 from '@/assets/images/Little1.png';
import Little2 from '@/assets/images/Little2.png';
import Little3 from '@/assets/images/Little3.png';
import Little4 from '@/assets/images/Little4.png';

import TALES1 from '@/assets/images/TALES1.png';
import TALES2 from '@/assets/images/TALES2.png';
import TALES3 from '@/assets/images/TALES3.png';
import TALES4 from '@/assets/images/TALES4.png';

import KATAMARI1 from '@/assets/images/KATAMARI1.png';
import KATAMARI2 from '@/assets/images/KATAMARI2.png';
import KATAMARI3 from '@/assets/images/KATAMARI3.png';
import KATAMARI4 from '@/assets/images/KATAMARI4.png';

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
  
  BIOHAZARD1,
  BIOHAZARD2,
  BIOHAZARD3,
  BIOHAZARD4,

  RYUGAGOTOKU1,
  RYUGAGOTOKU2,
  RYUGAGOTOKU3,
  RYUGAGOTOKU4,

  SandLand1,
  SandLand2,
  SandLand3,
  SandLand4,

  SPLATOON1,
  SPLATOON2,
  SPLATOON3,
  SPLATOON4,

  MARIOKART1,
  MARIOKART2,
  MARIOKART3,
  MARIOKART4,

  PAPER1,
  PAPER2,
  PAPER3,
  PAPER4,

  ZELDA1,
  ZELDA2,
  ZELDA3,
  ZELDA4,

  HALO1,
  HALO2,
  HALO3,
  HALO4,

  FORZA1,
  FORZA2,
  FORZA3,
  FORZA4,

  MINECRAFT1,
  MINECRAFT2,
  MINECRAFT3,
  MINECRAFT4,

  DEADSPACE1,
  DEADSPACE2,
  DEADSPACE3,
  DEADSPACE4,

  FINALFANTASY1,
  FINALFANTASY2,
  FINALFANTASY3,
  FINALFANTASY4,

  Little1,
  Little2,
  Little3,
  Little4,

  TALES1,
  TALES2,
  TALES3,
  TALES4,

  KATAMARI1,
  KATAMARI2,  
  KATAMARI3,
  KATAMARI4,
};

Vue.component('Navigation', Navigation);
Vue.component('Lunbo', Lunbo);
Vue.component('CartNav', CartNav);
Vue.component('CartItem', CartItem);
Vue.component('CateTitle', CateTitle);
Vue.component('MallTop',MallTop)
Vue.component('Mall',Mall);
Vue.component('BreadCrumb',BreadCrumb);
Vue.component('imgLunbo',imgLunbo);
//グローバルメソッドを登録するため
Vue.mixin(mixins);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
