<template>
  <div id="app">
<!-- <Navigation/> -->
  <!-- <Lunbo/> -->
    <router-view />
  </div>
</template>

<script>
// Home.vue には、Navigation.vue と Lunbo.vue がインポートされていますので、ここはいらない
// import Navigation from '@/views/Navigation.vue'
// import Lunbo from '@/components/Lunbo.vue'

import logo from '@/assets/images/logo.png';
import searchIcon from '@/assets/images/検索用の虫眼鏡アイコン.png';
import shoppingCart from '@/assets/images/shopping-cart.png';
export default {
  data(){
    return{
      logo,
      searchIcon,
      shoppingCart
    }
  }
//  components: {
//    Navigation,
//    Lunbo
//  }


};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}
header {
  position: relative;
  bottom: 263px;
  width: 179vh;
}

</style>
