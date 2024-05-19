<template>
  <div>
    <CateTitle :title="gameCategory" :to="`/Mall/${gameCategory}`"/>
    <div class="CartList">
    <CartItem v-for="item in CartItems" :key="item.id" :item="item"/>
  </div>
  </div>
</template>

<script>
import Uncarted4 from '@/assets/images/Uncharted4.png';
import Biohazard4 from '@/assets/images/バイオハザード４.png';
import RyuGaGotoku8 from '@/assets/images/龍が如く８.png';
import SandLand from '@/assets/images/SandLand.png';


export default {
  data(){
    return{
    gameCategory: "PS4・PS5",
    CartItems:[
    {
          id: 1,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "UNCHARTED 4",
          url: Uncarted4,
          price: 6070,
          stock: 10,
    },
    {
          id: 2,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "バイオハザード 4",
          url: Biohazard4,
          price: 1266,
          stock: 5,
    },
    {
          id: 3,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "龍が如く8",
          url: RyuGaGotoku8,
          price: 6120,
          stock: 3,
    },
    {
          id: 4,
          gameCategory: "PS4・PS5",
          category: "PS5",
          name: "SandLand",
          url: SandLand,
          price: 7038,
          stock: 2,
    },
    ]
    }
  }
}
</script>

<style scoped>
.CartList[data-v-a8662897] {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: 10px;
    bottom: 0px;
}

h2{
  color: black;
}
</style>