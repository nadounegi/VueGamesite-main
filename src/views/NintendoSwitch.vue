<template>
  <div class="ns__main">
    <CateTitle class="ns__main-title" :title="gameCategory" />
        <div class="ns__main-cart-list">
      <CartItemTest class="ns__main-item" v-for="item in NSList" :key="item.id" :item="item" />
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
    },
        created(){
            this.$store.dispatch('NS/getNSList')
        },
};
</script>

<style scoped>
.ns__main >>> html,body{
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.ns__main-cart-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5px;
    position: relative;
    left: 111px;
    bottom: 0px;
}

.ns__main-title{
    position: relative;
    left: 275px;
    top: -61px;
    margin-bottom: 20px;
}

.ns__main-item {
    display: flex;
    position: relative;
    left: 59vw;
    bottom: 53px;
    width: 108px;
    margin-left: -304px;
    margin-bottom: 28px;
}

.ns__main-item >>>.cart-item{
    width: 171%;
    position: relative;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.ns__main-item >>> .cart-item__button-container {
    display: flex;
    width: 80%;
    margin-top: 33px;
    position: relative;
    left: 17px;
    top: 13px;
}

.ns__main-item >>> .cart-item__info{
    position: relative;
    /* top: 15px; */
}

.ns__main-item >>> .cart-item__name {
    font-weight: bold;
    font-size: 13px;
}

.pc__main-item >>> .cart-item__info p{
    font-size: 13px;
    margin-top: -6px;
    margin-left: -4px;
}

.ns__main-item >>> .cart-item__count{
    position: relative;
    top: 3px;
    font-size: 20px;
}

.ns__main-item >>> .cart-item__button-container {
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    top: -1px;
    left: 10px;
}
</style>
