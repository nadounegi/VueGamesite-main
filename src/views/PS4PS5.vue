<template>
  <div>
    <BreadCrumb />
    <CateTitle :title="gameCategory"/>
    <div class="CartList">
      <CartItemTest v-for="item in PS4PS5List" :key="item.id" :item="item" />
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
    },
        created(){
            this.$store.dispatch('PS4PS5/getPS4PS5List')
        },
};
</script>

<style scoped>
.content{
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 215px;
  height: calc(125vh - 407px);
}

.breadcrumb{
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}

.CartList {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  position: relative;
  left: 111px;
  bottom: 0px;
}

.cateTitle{
  position: relative;
  left: 226px;
  top: 0px;
  margin-bottom: 20px;
}

.cateTitle h2{
  position: relative;
  color: black;
  bottom: 7px;
  left: 1px;
}
.cateTitle h4 {
  position: relative;
  bottom: 21px; 
  left: 17px;
  cursor: pointer;
}
.cartItem {
    display: flex;
    position: relative;
    right: 11px;
    margin-left: 26px;
    margin-bottom: 20px;
}
</style>
