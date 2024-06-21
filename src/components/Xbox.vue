<template>
    <div>
        <CateTitle id="XboxTitle" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest v-for="item in XboxList" :key="item.id" :item="item"/>
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