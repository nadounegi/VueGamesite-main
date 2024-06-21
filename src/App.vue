<template>
    <div id="app">
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
    created(){
     
    },
    data(){
      return{
        menuActive: false,
        logo,
        searchIcon,
        shoppingCart
      };
    },
    methods:{
        updateDropdownActive(value){
          this.menuActive = value;
        }
    }
  };
  </script>
  
  <style scoped>
  
  *{
    margin: 0;
    padding: 0;
  }

  
  </style>
  