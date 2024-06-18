<template>
    <div>
        <CateTitle id="NSTitle" :title="gameCategory" :to="getCategoryLink(gameCategory)" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest v-for="item in NSList" :key="item.id" :item="item"/>
        </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        data(){
            return{
                gameCategory: "Nitendo Switch",
                NSList:[
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
                ]
            }
        },
        methods:{
            getCategoryLink(category){
                const item = this.NSList.find(item => item.category === category);
                return item ? item.href : '#';
            }
        }
    }
    </script>
    
    <style>
    #NSTitle {
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