<template>
<div>
    <CateTitle :title="gameCategory" :to="getCategoryLink(gameCategory)" :showLink="true"/>
    <div class="CartListItem">
        <div class="CartList">
        <CartItemTest class="PS4PS5" v-for="item in PS4PS5List" :key="item.id" :item="item"/>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gameCategory: "PS4・PS5",
            PS4PS5List:[
                {
                    id: 1,
                    category: "PS4",
                    name: "UNCHARTED 4",
                    url: this.$imgUrl.UNCHARTED1,
                    price: 6070,
                    stock: 10,
                },
                {
                    id: 2,
                    category: "PS4",
                    name: "バイオハザード 4",
                    url: this.$imgUrl.BIOHAZARD1,
                    price: 1266,
                    stock: 5,
                },
                {
                    id: 3,
                    category: "PS5",
                    name: "龍が如く8",
                    url: this.$imgUrl.RYUGAGOTOKU1,
                    price: 6120,
                    stock: 3,
                },
                {
                    id: 4,
                    category: "PS5",
                    name: "SandLand",
                    url: this.$imgUrl.SandLand1,
                    price: 7038,
                    stock: 2,
                },
            ]
        }
    },
    methods:{
        getCategoryLink(category){
            const item = this.PS4PS5List.find(item => item.category === category);
            return item ? item.href : '#';
        }
    }
}
</script>

<style>
.cateTitle {
    position: relative;
    left: 137px;
    top: 3px;
    margin-bottom: 40px;
}

.CartListItem .CartList {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    line-height: 1;
    left: 130px;
    bottom: 65px;
}

.PS4PS5.cartBtns {
    display: flex;
    margin: auto;
    gap: 9px;
    position: relative;
    bottom: 30px;
    left: 46px;
}    
</style>