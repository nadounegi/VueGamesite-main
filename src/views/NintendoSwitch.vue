<template>
  <div>
    <BreadCrumb/>
    <CateTitle :title="gameCategory" />
        <div class="CartList">
      <CartItem v-for="item in CartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>

// import Splatoon3 from '@/assets/images/スプラトゥーン３.png';
// import Mario8 from '@/assets/images/マリオカート8.png';
// import PaperMario from '@/assets/images/ペーパーマリオRPG.png';
// import Zelda from '@/assets/images/ゼルダの伝説.png';

export default {
  data(){
    return{
      gameCategory: "Nintendo Switch",
      CartItems:[
      {
          id: 5,
          gameCategory: "Nintendo Switch",
          category: "NS",
          name: "スプラトゥーン3",
          url: this.$imgUrl.SPLATOON1,
          price: 5618,
          stock: 7,
      },
      {
          id: 6,
          gameCategory: "Nintendo Switch",
          category: "NS",
          name: "マリオカート8",
          url: this.$imgUrl.MARIOKART1,
          price: 5307,
          stock: 4,
        },
        {
          id: 7,
          gameCategory: "Nintendo Switch",
          category: "NS",
          name: "ペーパーマリオRPG",
          url: this.$imgUrl.PAPER1,
          price: 5382,
          stock: 3,
        },
        {
          id: 8,
          gameCategory: "Nintendo Switch",
          category: "NS",
          name: "ゼルダの伝説",
          url: this.$imgUrl.ZELDA1,
          price: 6120,
          stock: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content{
  margin-top: 134px;
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

.cateTitle h2 {
  position: relative;
  top: 5px;
  left: 37px;
  color: black;
}
.cateTitle h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}
</style>
