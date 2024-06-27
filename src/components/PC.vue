<template>
    <div class="pc">
        <CateTitle class="pc__title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="pc__cart-list-item">
            <div class="pc__cart-list">
            <CartItemTest class="pc__item" v-for="item in PCList" :key="item.id" :item="item"/>
        </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        computed:{
        gameCategory(){
            return "PC";
        },
        PCList(){
            return this.$store.getters['PC/PCList']
        },
        categoryLink(){
            return this.getCategoryLink();
        },
    },
        created(){
            this.$store.dispatch('PC/getPCList')
        },
        methods:{
            getCategoryLink(category){
                const item = this.PCList.find(item => item.category === "PC");
                return item ? item.href : '#';
            }
        }
    }
    </script>
    
    <style scoped>
    .pc.main__pc{
        margin-top: 66px;
    }
    .pc__title {
        position: relative;
        left: 326px;
        top: -121px;
    }

    .pc__cart-list-item .pc__cart-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        line-height: 1;
        left: 130px;
        bottom: 185px;
    }

    .pc__item >>> .cart-item {
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

    .pc__item >>> .cart-item__name {
        width: 15vw;
        font-size: 13px;
        font-weight: bold;
    }

    .pc__item >>> .cart-item__count{
        position: relative;
        top: 0px;
        font-size: 20px;
    }

    .pc__item >>> .cart-item__button-container {
        display: flex;
        justify-content: center;
        width: 85%;
        margin-top: 10px;
        position: relative;
        top: 10px;
        left: 10px;
    }
    </style>