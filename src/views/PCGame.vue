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
          url: this.$imgUrl.FINALFANTASY1,
          price: 4200,
          stock: 5,
        },
        {
          id: 14,
          gameCategory: "PC",
          category: "PC",
          name: "リトルナイトメア",
          url: this.$imgUrl.Little1,
          price: 2420,
          stock: 3,
        },
        {
          id: 15,
          gameCategory: "PC",
          category: "PC",
          name: "Tales of ARISE",
          url: this.$imgUrl.TALES1,
          price: 4400,
          stock: 2,
        },
        {
          id: 16,
          gameCategory: "PC",
          category: "PC",
          name: "みんな大好き塊魂アンコール",
          url: this.$imgUrl.KATAMARI1,
          price: 3960,
          stock: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
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
