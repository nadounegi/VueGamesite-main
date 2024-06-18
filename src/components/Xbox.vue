<template>
    <div>
        <CateTitle id="XboxTitle" :title="gameCategory" :to="getCategoryLink(gameCategory)" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest v-for="item in XboxList" :key="item.id" :item="item"/>
        </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        data(){
            return{
                gameCategory: "Xbox",
                XboxList:[
                {
                    id: 9,
                    gameCategory: "Xbox",
                    href: "/Mall/Xbox",
                    category: "Xbox Series X",
                    name: "Halo Infinite",
                    url: "src/assets/images/HALO1.png",
                    price: 6209,
                    stock: 6,
                },
                {
                    id: 10,
                    gameCategory: "Xbox",
                    href: "/Mall/Xbox",
                    category: "Xbox Series X",
                    name: "Forza Motorsport",
                    url: "src/assets/images/FORZA1.png",
                    price: 4800,
                    stock: 4,
                },
                {
                    id: 11,
                    gameCategory: "Xbox",
                    href: "/Mall/Xbox",
                    category: "Xbox One",
                    name: "Minecraft Legends",
                    url: "src/assets/images/MINECRAFT1.png",
                    price: 1586,
                    stock: 3,
                },
                {
                    id: 12,
                    gameCategory: "Xbox",
                    href: "/Mall/Xbox",
                    category: "Xbox Series X",
                    name: "Dead Space",
                    url: "src/assets/images/DEADSPACE1.png",
                    price: 7775,
                    stock: 2,
                },
                ]
            }
        },
        methods:{
            getCategoryLink(category){
                const item = this.XboxList.find(item => item.category === category);
                return item ? item.href : '#';
            }
        }
    }
    </script>
    
    <style>
    #XboxTitle {
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

    .cartBtns {
    display: flex;
    margin: auto;
    gap: 9px;
    position: relative;
    bottom: 30px;
    left: 46px;
}    
    </style>