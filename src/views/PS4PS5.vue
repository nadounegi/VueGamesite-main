<template>
  <div class="ps4ps5__main">
    <CateTitle class="ps4ps5__main-title" :title="gameCategory"/>
    <div class="ps4ps5__main-cart-list">
      <CartItemTest class="ps4ps5__main-item" v-for="item in PS4PS5List" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>

export default {
  computed:{
        gameCategory(){
            return "PS4・PS5";
        },
        PS4PS5List(){
            return this.$store.getters['PS4PS5/PS4PS5List']
        },
    },
        created(){
            this.$store.dispatch('PS4PS5/getPS4PS5List')
        },
};
</script>

<style scoped>
.ps4ps5__main >>> html,body{
  height: 100%;
  margin: 0;
  overflow: hidden;
}
.ps4ps5__main-cart-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  position: relative;
  left: 111px;
  bottom: 0px;
}

.ps4ps5__main-title{
  position: relative;
  left: 275px;
  top: -61px;
  margin-bottom: 20px;
}

.ps4ps5__main-item {
  display: flex;
  position: relative;
  left: 61vw;
  bottom: 53px;
  width: 108px;
  margin-left: -314px;
  margin-bottom: 28px;
}

.ps4ps5__main-item >>>.cart-item{
  width: 18.5vw;
  margin-left: 467px;
}

.ps4ps5__main-item >>> .cart-item__button-container {
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    top: 10px;
    left: 10px;
}

.ps4ps5__main-item >>> .cart-item__name {
  font-size: 13px;
  font-weight: bold;
}

.ps4ps5__main-item >>> .cart-item__category {
  font-size: 13px;
}
.ps4ps5__main-item >>> .cart-item__price {
  font-size: 13px;
}
.ps4ps5__main-item >>> .cart-item__stock {
  font-size: 13px;
  margin-bottom: 10px;
}

.ps4ps5__main-item >>> .cart-item__count{
    position: relative;
    top: 3px;
    font-size: 20px;
}

.ps4ps5__main-item >>> .cart-item__button-container {
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    top: -1px;
    left: 10px;
}
</style>
