<template>
  <div>
    <CartNav />
    <div class="main">
      <SideMenu />
      <div class="content">
      <div v-for="category in uniqueCategories" :key="category" class="CartListItem">
        <CateTitle :title="category" :link ="`/gameCategory/${category}`"/>
          <div class="CartList">
            <CartItem v-for="item in filteredItems(category)"
              :key="item.id"
              :item="item"/>
          </div>
      </div>
      </div>  
    </div>
  </div>
</template>

<script>
import CartNav from '@/components/CartNav.vue';
import SideMenu from '@/components/SideMenu.vue';
export default {
  name: 'Mall',
  components: {
    CartNav,
    SideMenu,
  },
  data() {
  return {
    cartList: [
      {
        id: 1,
        gameCategory: "PS4・PS5",
        category: "PS4",
        name: "UNCHARTED 4",
        url: "src/assets/images/Uncharted4.png",
        price: 6070,
        stock: 10
      },
      {
        id: 2,
        gameCategory: "PS4・PS5",
        category: "PS4",
        name: "バイオハザード 4",
        url: "src/assets/images/バイオハザード４.png",
        price: 1266,
        stock: 5
      },
      {
        id: 3,
        gameCategory: "PS4・PS5",
        category: "PS5",
        name: "龍が如く8",
        url: "src/assets/images/龍が如く８.png",
        price: 6120,
        stock: 3
      },
      {
        id: 4,
        gameCategory:"PS4・PS5",
        category: "PS5",
        name:"SandLand",
        url:"src/assets/images/SandLand.png",
        price:7038,
        stock: 2
      },
      {
        id: 5,
        gameCategory: "Nintendo Switch",
        category: "NS",
        name: "スプラトゥーン3",
        url: "src/assets/images/スプラトゥーン３.png",
        price: 5618,
        stock: 7
      },
      {
        id: 6,
        gameCategory: "Nintendo Switch",
        category: "NS",
        name: "マリオカート8",
        url: "src/assets/images/マリオカート8.png",
        price:5307,
        stock: 4
      },
      {
        id: 7,
        gameCategory: "Nintendo Switch",
        category: "NS",
        name: "ペーパーマリオRPG",
        url: "src/assets/images/ペーパーマリオRPG.png",
        price: 5382,
        stock: 3
      },
      {
        id: 8,
        gameCategory: "Nintendo Switch",
        category: "NS",
        name: "ゼルダの伝説",
        url: "src/assets/images/ゼルダの伝説.png",
        price: 6120,
        stock: 3
      },
      {
        id: 9,
        gameCategory: "Xbox",
        category: "Xbox Series X",
        name: "Halo Infinite",
        url: "src/assets/images/HaloInfinite.png",
        price: 6209,
        stock: 6
      },
      {
        id: 10,
        gameCategory: "Xbox",
        category: "Xbox Series X",
        name: "Forza Motorsport",
        url: "src/assets/images/ForzaMotorsport.png",
        price:4800,
        stock: 4
      },
      {
        id: 11,
        gameCategory: "Xbox",
        category: "Xbox One",
        name: "Minecraft Legends",
        url: "src/assets/images/MinecraftLegends.png",
        price: 1586,
        stock: 3
      },
      {
        id: 12,
        gameCategory: "Xbox",
        category: "Xbox Series X",
        name: "Dead Space",
        url: "src/assets/images/DeadSpace.png",
        price: 7775,
        stock: 2
      },
      {
        id: 13,
        gameCategory: "PC",
        category: "PC",
        name:"ファイナルファンタジーXIV",
        url:"src/assets/images/ファイナルファンタジーXIV.png",
        price: 4200,
        stock: 5
      },
      {
        id: 14,
        gameCategory: "PC",
        category: "PC",
        name: "リトルナイトメア",
        url: "src/assets/images/リトルナイトメア.png",
        price: 2420,
        stock: 3
      },
      {
        id: 15,
        gameCategory: "PC",
        category: "PC",
        name: "TalesofARISE",
        url: "src/assets/images/TalesofARISE.png",
        price: 4400,
        stock: 2
      },
      {
        id: 16,
        gameCategory: "PC",
        category: "PC",
        name: "みんな大好き塊魂アンコール",
        url: "src/assets/images/塊魂.png",
        price: 3960,
        stock: 1
      }
    ],
    uniqueCategories: [
      "PS4・PS5",
      "Nintendo Switch",
      "Xbox",
      "PC",
    ]
  }
},
methods: {
  filteredItems(category) {
    return this.cartList.filter(item => item.gameCategory === category);
  }
},
  };
</script>

<style >
.main{
  /* margin-top: 299px; */
  display: flex;
  margin-top: 60px;
}

.content{
  margin-top: 60px;
  margin-left: 250px;
  height: calc(100vh - 60px);
  overflow-y:scroll ;
  width: calc(100% - 250px);
}

.CartListItem{
  position: relative;
  margin-right: 107px;
  left: -55px;
  top: 162px;
}

.CartList{
  display: flex;
  position: relative;
  left: 131px;
  bottom: 56px;
}
/* Fixed CartNav */
.CartNav{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
/* Fixed SideMenu */
</style>