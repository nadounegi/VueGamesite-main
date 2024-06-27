<template>
    <div class="xbox__main">
      <CateTitle class="xbox__main-title" :title="gameCategory"/>
      <div class="xbox__main-cart-list">
        <CartItemTest class="xbox__main-item" v-for="item in XboxList" :key="item.id" :item="item"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
          gameCategory(){
              return "Xbox";
          },
          XboxList(){
              return this.$store.getters['Xbox/XboxList']
          },
      
          },
          created(){
              this.$store.dispatch('Xbox/getXboxList')
          },
  };
  </script>
  
  <style scoped>
  .xbox__main >>> html,body{
      height: 100%;
      margin: 0;
      overflow: hidden;
  }
  .xbox__main-cart-list {
      display: flex;
      flex-wrap: wrap;
      margin-left: 5px;
      position: relative;
      left: 111px;
      bottom: 0px;
  }
  
  .xbox__main-title{
      position: relative;
      left: 275px;
      top: -61px;
      margin-bottom: 20px;
  }
  
  .xbox__main-item {
      display: flex;
      position: relative;
      left: 59vw;
      bottom: 53px;
      width: 112px;
      margin-left: -310px;
      margin-bottom: 28px;
  }
  
  .xbox__main-item >>>.cart-item{
      width: 171%;
      position: relative;
      left: 39px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
  }
  
  .xbox__main-item >>> .cart-item__button-container {
      display: flex;
      width: 80%;
      margin-top: 33px;
      position: relative;
      left: 17px;
      top: 13px;
  }
  
  .xbox__main-item >>> .cart-item__info{
      position: relative;
      /* top: 15px; */
  }
  
  .xbox__main-item >>> .cart-item__name {
      width: 23vw;
      font-weight: bold;
      font-size: 15px;
  }
  
  .xbox__main-item >>> .cart-item__info p{
      font-size: 13px;
      margin-top: -6px;
      margin-left: -4px;
  }
  
  .xbox__main-item >>> .cart-item__count{
      position: relative;
      top: 3px;
      font-size: 20px;
  }
  
  .xbox__main-item >>> .cart-item__button-container {
      display: flex;
      justify-content: center;
      width: 85%;
      margin-top: 10px;
      position: relative;
      top: -1px;
      left: 10px;
  }
  </style>
  