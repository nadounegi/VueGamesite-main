<template>
  <div>
    <CartNav/>
    <SideMenu/>
    <div class="mainContainer">
    <BreadCrumb/>
    <CateTitle :title="titleCategory"/>
      <div class="CartList">
        <CartItem v-for="item in CartItems" :key="item.id" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
export default {
  components: {
    SideMenu,
  },
  data(){
    return{
      titleCategory:"テレビゲーム",
      CartItems:[
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
        {
          id: 9,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Halo Infinite",
          url: this.$imgUrl.HALO1,
          price: 6209,
          stock: 6,
        },
        {
          id: 10,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Forza Motorsport",
          url: this.$imgUrl.FORZA1,
          price: 4800,
          stock: 4,
        },
        {
          id: 11,
          gameCategory: "Xbox",
          category: "Xbox One",
          name: "Minecraft Legends",
          url: this.$imgUrl.MINECRAFT1,
          price: 1586,
          stock: 3,
        },
        {
          id: 12,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Dead Space",
          url: this.$imgUrl.DEADSPACE1,
          price: 7775,
          stock: 2,
        },
      ]
    }
  }
}
</script>

<style scoped>
.CartNav {
    position: fixed;
    top: -36px;
    left: 132px;
    width: 100%;
    z-index: 1000;
}

.mainContainer{
  height: 84vh;
  position: relative;
  overflow-y: auto;
  top: 68px;
  margin-top: 187px;
}
.SideMenu{
  position: fixed;
  top: 241px;
  left: 2px;
  height: calc(81vh - 60px);
  width: 308px;
  background-color: #f1f1f1;
  border-right: solid 1px #8080804d;
  z-index: 1000;
}

.mainContainer .cateTitle{
  position: relative;
  left: 332px;
  top: 28px;
  margin-bottom: 20px;
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
  position: relative;
  line-height: 1;
  left: 105px;
  top: 25px;
  padding-left: 212px;
  max-height: calc(100vh - 215px); 
}
.cartItem{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 264px;
  height: 379px;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 0px;
  box-sizing: border-box;
  position: relative;
}

.CartList.buttonContainer .cartButton{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: auto;
  height: 41px;
  width: 115px;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left ,rgb(130, 130, 255),rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
  position: absolute;
  bottom: 43px;
}
</style>