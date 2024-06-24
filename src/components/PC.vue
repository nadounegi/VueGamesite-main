<template>
    <div>
        <CateTitle id="PCTitle" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest class="PC" v-for="item in PCList" :key="item.id" :item="item"/>
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
    
    <style>
    #PCTitle {
        position: relative;
        left: 218px;
        top: 9px;
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