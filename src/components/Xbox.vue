<template>
    <div class="xbox">
        <CateTitle class="xbox__title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="xbox__cart-list-item">
            <div class="xbox__cart-list">
            <CartItemTest class="xbox__item" v-for="item in XboxList" :key="item.id" :item="item"/>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        computed:{
        gameCategory(){
            return "Xbox";
        },
        XboxList(){
            return this.$store.getters['Xbox/XboxList']
        },
        categoryLink(){
            return this.getCategoryLink();
        },
    },
        created(){
            this.$store.dispatch('Xbox/getXboxList')
        },
        methods:{
            getCategoryLink(){
                const item = this.XboxList.find(item => item.category === "Xbox" || item.category === "Xbox Series X");
                return item ? item.href : '#';
            }
        }
    }
    </script>
    
    <style scoped>
    .xbox.main__xbox {
        margin-top: 66px;
    }
    .xbox__title {
        position: relative;
        height: 33px;
        left: 327px;
        top: -132px;
        margin-bottom: -27px;
    }
    
    .xbox__cart-list-item .xbox__cart-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        line-height: 1;
        left: 130px;
        bottom: 85px;
    }
    
    .xbox__item >>> .cart-item{
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

    .xbox__item >>> .cart-item__name {
        width: 15vw;
        font-size: 13px;
        font-weight: bold;
    }

    .xbox__item >>> .cart-item__count{
        position: relative;
        top: 3px;
        font-size: 20px;
    }

    .xbox__item >>> .cart-item__button-container {
        display: flex;
        justify-content: center;
        width: 85%;
        margin-top: 10px;
        position: relative;
        top: 10px;
        left: 10px;
    }

    .xbox__item:first-child >>> .cart-item__button-container {
        display: flex;
        justify-content: center;
        width: 85%;
        margin-top: 10px;
        position: relative;
        top: 22px;
        left: 10px;
    }

    .xbox__item:nth-child(4) >>> .cart-item__button-container {
        display: flex;
        justify-content: center;
        width: 85%;
        margin-top: 10px;
        position: relative;
        top: 22px;
        left: 10px;
    }
    </style>