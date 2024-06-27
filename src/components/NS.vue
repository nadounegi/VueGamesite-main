<template>
    <div class="ns">
        <CateTitle class="ns__title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
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
    .ns.main__ns {
        margin-top: 66px;
    }
    .ns__title {
        position: relative;
        height: 33px;
        left: 327px;
        top: -132px;
        margin-bottom: -27px;
    }
    
    .ns__cart-list-item .ns__cart-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        line-height: 1;
        left: 130px;
        bottom: 85px;
    }
    .ns__item >>> .cart-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 192px;
        margin-left: 12px;
        height: 350px;
        padding: 10px;
        box-sizing: border-box;
        border: rgb(162, 157, 157) solid 1px;
        position: relative;
        left: 164px;
        top: 48px;
    }

    .ns__item >>> .cart-item__name {
    font-size: 13px;
    font-weight: bold;
  }

    .ns__item >>> .cart-item__count{
        position: relative;
        top: 0px;
        font-size: 20px;
    }

    .ns__item >>> .cart-item__button-container {
        display: flex;
        justify-content: center;
        width: 85%;
        margin-top: 10px;
        position: relative;
        top: 10px;
        left: 10px;
    }
    </style>