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
          url: this.$imgUrl.UNCHARTED1,
          price: 6070,
          stock: 10,
        },
        {
          id: 2,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "バイオハザード 4",
          url: this.$imgUrl.BIOHAZARD1,
          price: 1266,
          stock: 5,
        },
        {
          id: 3,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "龍が如く8",
          url: this.$imgUrl.RYUGAGOTOKU1,
          price: 6120,
          stock: 3,
        },
        {
          id: 4,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "SandLand",
          url: this.$imgUrl.SandLand1,
          price: 7038,
          stock: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content{
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 215px;
  height: calc(125vh - 407px);
}

.breadcrumb{
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}

.CartList {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  position: relative;
  left: 111px;
  bottom: 0px;
}

.cateTitle{
  position: relative;
  left: 123px;
  top: 0px;
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
