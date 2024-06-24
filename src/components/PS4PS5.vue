<template>
<div>
    <CateTitle id="PS4PS5Title" :title="gameCategory" :to="categoryLink" :showLink="true"/>
    <div class="CartListItem">
        <div class="CartList">
        <CartItemTest class="PS4PS5" v-for="item in PS4PS5List" :key="item.id" :item="item"/>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    computed:{
        gameCategory(){
            return "PS4・PS5";
        },
        PS4PS5List(){
            return this.$store.getters['PS4PS5/PS4PS5List']
        },
        categoryLink(){
            return this.getCategoryLink();
        }
        },
        created(){
            this.$store.dispatch('PS4PS5/getPS4PS5List')
        },
        methods:{
            getCategoryLink(){
                const item = this.PS4PS5List.find(item => item.category === "PS4" || item.category === "PS5");
                return item ? item.href : '#';
            }
        }
    }
</script>

<style scoped>
#PS4PS5Title {
    position: relative;
    left: 221px;
    top: 8px;
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