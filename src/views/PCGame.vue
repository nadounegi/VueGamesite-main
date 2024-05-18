<template>
    <div>
        <CartTitle title="PC" link="/Mall/PC"/>
        <div class="CartList">
        <CartItem v-for="item in cartItems" :key="item.id" :item="item"/>
    </div>
    </div>
</template>

<script>
export default {
    name:'PC',
    data(){
        return{
            cartItems:[
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
    ]
        }
    }
}
</script>

<style>

</style>