<template>
    <div>
        <CateTitle id="ns__title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="ns__cart-list-item">
            <div class="ns__cart-list">
            <CartItemTest class="ns__item" v-for="item in NSList" :key="item.id" :item="item"/>
        </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        computed:{
        gameCategory(){
            return "Nintendo Switch";
        },
        NSList(){
            return this.$store.getters['NS/NSList']
        },
        categoryLink(){
            return this.getCategoryLink();
        },
    },
        created(){
            this.$store.dispatch('NS/getNSList')
        },
        methods:{
            getCategoryLink(){
                const item = this.NSList.find(item => item.category === "NS" );
                return item ? item.href : '#';
            }
        }
    
}
    </script>
    
    <style scoped>
    .ns__title {
        position: relative;
        left: 215px;
        top: 9px;
        margin-top: -54px;
    }
    
    .ns__cart-list-item .ns__cart-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        line-height: 1;
        left: 130px;
        bottom: 65px;
    }
    .ns__item >>> .cart-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 167px;
        margin-left: 17px;
        height: 350px;
        padding: 10px;
        box-sizing: border-box;
        border: rgb(162, 157, 157) solid 1px;
        position: relative;
        left: 184px;
        top: 48px;
    }
    </style>