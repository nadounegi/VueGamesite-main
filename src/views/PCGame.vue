<template>
  <div class="pc__main">
    <CateTitle class="pc__main-title" :title="gameCategory"/>
    <div class="pc__main-cart-list">
      <CartItemTest class="pc__main-item" v-for="item in PCList" :key="item.id" :item="item"/>
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
    
        },
        created(){
            this.$store.dispatch('PC/getPCList')
        },
};
</script>

<style scoped>
.pc__main >>> html,body{
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.pc__main-cart-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5px;
    position: relative;
    left: 111px;
    bottom: 0px;
}

.pc__main-title{
    position: relative;
    left: 275px;
    top: -61px;
    margin-bottom: 20px;
}

.pc__main-item {
    display: flex;
    position: relative;
    left: 59vw;
    bottom: 53px;
    width: 108px;
    margin-left: -304px;
    margin-bottom: 28px;
}

.pc__main-item >>>.cart-item{
    width: 171%;
    position: relative;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.pc__main-item >>> .cart-item__button-container {
    display: flex;
    width: 80%;
    margin-top: 33px;
    position: relative;
    left: 17px;
    top: 13px;
}

.pc__main-item >>> .cart-item__info{
    position: relative;
    /* top: 15px; */
}

.pc__main-item >>> .cart-item__name {
    width: 12vw;
    font-weight: bold;
    font-size: 13px;
}

.pc__main-item >>> .cart-item__info p{
    font-size: 13px;
    margin-top: -6px;
    margin-left: -4px;
}

.pc__main-item >>> .cart-item__count{
    position: relative;
    top: 3px;
    font-size: 20px;
}

.pc__main-item >>> .cart-item__button-container {
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    top: -1px;
    left: 10px;
}
</style>
