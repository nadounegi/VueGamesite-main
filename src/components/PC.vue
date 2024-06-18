<template>
    <div>
        <CateTitle id="PCTitle" :title="gameCategory" :to="getCategoryLink(gameCategory)" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest v-for="item in PCList" :key="item.id" :item="item"/>
        </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        data(){
            return{
                gameCategory: "PC",
                PCList:[
                {
                  id: 13,
                  gameCategory: "PC",
                  href: "/Mall/PCGame",
                  category: "PC",
                  name: "ファイナルファンタジーXIV",
                  url: "src/assets/images/FINALFANTASY1.png",
                  price: 4200,
                  stock: 5,
                },
                {
                  id: 14,
                  gameCategory: "PC",
                  href: "/Mall/PCGame",
                  category: "PC",
                  name: "リトルナイトメア",
                  url: "src/assets/images/Little1.png",
                  price: 2420,
                  stock: 3,
                },
                {
                  id: 15,
                  gameCategory: "PC",
                  href: "/Mall/PCGame",
                  category: "PC",
                  name: "Tales of ARISE",
                  url: "src/assets/images/TALES1.png",
                  price: 4400,
                  stock: 2,
                },
                {
                  id: 16,
                  gameCategory: "PC",
                  href: "/Mall/PCGame",
                  category: "PC",
                  name: "みんな大好き塊魂アンコール",
                  url: "src/assets/images/KATAMARI1.png",
                  price: 3960,
                  stock: 1,
                },
                ]
            }
        },
        methods:{
            getCategoryLink(category){
                const item = this.PCList.find(item => item.category === category);
                return item ? item.href : '#';
            }
        }
    }
    </script>
    
    <style>
    #PCTitle {
        position: relative;
        left: 137px;
        margin-top: -54px;
    }
    
    .CartListItem .CartList {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        line-height: 1;
        left: 130px;
        bottom: 65px;
    }
    </style>