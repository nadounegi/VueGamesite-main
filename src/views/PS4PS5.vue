<template>
  <div>
    <BreadCrumb />
    <CateTitle :title="gameCategory"/>
    <div class="CartList">
      <CartItem v-for="item in CartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>

// import Uncarted4 from '@/assets/images/Uncharted4.png';
// import Biohazard4 from '@/assets/images/バイオハザード４.png';
// import RyuGaGotoku8 from '@/assets/images/龍が如く８.png';
// import SandLand from '@/assets/images/SandLand.png';

export default {
  data() {
    return {
      gameCategory: "PS4・PS5", // 确保定义了gameCategory
      CartItems: [
        {
          id: 1,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "UNCHARTED 4",
          url: this.$imgUrl.Uncarted4,
          price: 6070,
          stock: 10,
        },
        {
          id: 2,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "バイオハザード 4",
          url: this.$imgUrl.Biohazard4,
          price: 1266,
          stock: 5,
        },
        {
          id: 3,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "龍が如く8",
          url: this.$imgUrl.RyuGaGotoku8,
          price: 6120,
          stock: 3,
        },
        {
          id: 4,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "SandLand",
          url: this.$imgUrl.SandLand,
          price: 7038,
          stock: 2,
        },
      ],
    };
  },
};
</script>

<style>
.content{
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 215px;
  height: calc(125vh - 407px);
}
.CartList {
  display: flex;
  flex-wrap: wrap;
  margin-left: 64px;
  position: relative;
  left: 10px;
  bottom: 0px;
}

.cateTitle{
  position: relative;
  left: 123px;
  top: 29px;
  margin-bottom: 20px;
}

.cateTitle h2{
  position: relative;
  color: black;
  bottom: 7px;
  left: 1px;
}
.cateTitle h4 {
  position: relative;
  bottom: 21px; 
  left: 17px;
  cursor: pointer;
}
.cartItem {
    display: flex;
    position: relative;
    right: 11px;
    margin-left: 26px;
    margin-bottom: 20px;
}
</style>
