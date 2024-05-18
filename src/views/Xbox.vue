<template>
    <div>
        <CartTitle title="Xbox" link="/Mall/Xbox"/>
        <div class="CartList">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
    </div>
</template>

<script>
export default {
    name: 'Xbox',
    data(){
        return{
            cartItems:[
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
      }
    ]
        }
    }
}
</script>

<style>

</style>