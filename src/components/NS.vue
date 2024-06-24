<template>
    <div>
        <CateTitle id="NSTitle" :title="gameCategory" :to="categoryLink" :showLink="true"/>
        <div class="CartListItem">
            <div class="CartList">
            <CartItemTest class="NS" v-for="item in NSList" :key="item.id" :item="item"/>
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
    
    <style>
    #NSTitle {
        position: relative;
        left: 215px;
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