<template>
  <div>
    <CateTitle title="PS4・PS5" link="/Mall/PS4PS5"/>
    <div class="CartList">
    <CartItem v-for="item in CartItems" :key="item.id" :item="item"/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PS4PS5',
  data(){
    return{
    CartItems:[
      {
        id: 1,
        gameCategory: "PS4・PS5",
        caegory: "PS4",
        name: "UNCHARTED 4",
        url: require('src/assets/images/Uncharted4.png'),
        price: 6070,
        stock: 10
      },
      {
        id: 2,
        gameCategory: "PS4・PS5",
        category: "PS4",
        name: "バイオハザード 4",
        url: require('src/assets/images/バイオハザード４.png'),
        price: 1266,
        stock: 5
      },
      {
        id: 3,
        gameCategory: "PS4・PS5",
        category: "PS5",
        name: "龍が如く8",
        url: require('src/assets/images/龍が如く８.png'),
        price: 6120,
        stock: 3
      },
      {
        id: 4,
        gameCategory:"PS4・PS5",
        category: "PS5",
        name:"SandLand",
        url: require('src/assets/images/SandLand.png'),
        price:7038,
        stock: 2
      }
    ]
    }
  }
}
</script>

<style>

</style>