<template>
  <div>
    <BreadCrumb/>
    <CateTitle :title="gameCategory"/>
    <div class="CartList">
      <CartItem v-for="item in CartItems" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
// import FF14 from '@/assets/images/ファイナルファンタジーXIV.png';
// import LittleNightmare from '@/assets/images/リトルナイトメア.png';
// import TalesofARISE from '@/assets/images/TalesofARISE.png';
// import Katamari from '@/assets/images/塊魂.png';

export default {
  
  data() {
    return {
      gameCategory: "PCGame",
      CartItems: [
        {
          id: 13,
          gameCategory: "PC",
          category: "PC",
          name: "ファイナルファンタジーXIV",
          url: this.$imgUrl.FF14,
          price: 4200,
          stock: 5,
        },
        {
          id: 14,
          gameCategory: "PC",
          category: "PC",
          name: "リトルナイトメア",
          url: this.$imgUrl.LittleNightmare,
          price: 2420,
          stock: 3,
        },
        {
          id: 15,
          gameCategory: "PC",
          category: "PC",
          name: "Tales of ARISE",
          url: this.$imgUrl.TalesofARISE,
          price: 4400,
          stock: 2,
        },
        {
          id: 16,
          gameCategory: "PC",
          category: "PC",
          name: "みんな大好き塊魂アンコール",
          url: this.$imgUrl.Katamari,
          price: 3960,
          stock: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.CartList {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 10px;
  bottom: 0px;
}

.cateTitle {
  position: relative;
  left: 37px;
  top: 34px;
  margin-bottom: 20px;
}

.cateTitle h2 {
  color: black;
}

.cateTitle h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}
</style>
