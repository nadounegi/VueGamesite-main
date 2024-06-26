<template>
    <div class="ps4ps5">
      <CateTitle class="ps4ps5__title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
      <div class="ps4ps5__cart-list-item">
        <div class="ps4ps5__cart-list">
          <CartItemTest class="ps4ps5__item" v-for="item in PS4PS5List" :key="item.id" :item="item"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      gameCategory() {
        return "PS4・PS5";
      },
      PS4PS5List() {
        return this.$store.getters['PS4PS5/PS4PS5List'];
      },
      categoryLink() {
        return this.getCategoryLink();
      }
    },
    created() {
      this.$store.dispatch('PS4PS5/getPS4PS5List');
    },
    methods: {
      getCategoryLink() {
        const item = this.PS4PS5List.find(item => item.category === "PS4" || item.category === "PS5");
        return item ? item.href : '#';
      }
    }
  };
  </script>
  
  <style scoped>
  .ps4ps5__title {
    position: relative;
    height: 33px;
    left: 327px;
    top: -132px;
    margin-bottom: -27px;
  }

  .ps4ps5__cart-list-item .ps4ps5__cart-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    line-height: 1;
    left: 130px;
    bottom: 65px;
  }
  
  .ps4ps5__item >>> .cart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 167px;
    margin-left: 17px;
    height: 350px;
    padding: 10px;
    box-sizing: border-box;
    border: rgb(162, 157, 157) solid 1px;
    position: relative;
    left: 184px;
    top: 48px;
  }

  .ps4ps5__item >>> .cart-item__count{
    position: relative;
    top: 3px;
    font-size: 20px;
  }

  .ps4ps5__item >>> .cart-item__button-container {
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    top: 10px;
    left: 10px;
  }
  </style>
  