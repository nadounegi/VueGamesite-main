<template>
  <div>
    <CateTitle :title="gameCategory"/>
    <div class="CartList">
      <CartItemTest v-for="item in PCList" :key="item.id" :item="item"/>
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

.cateTitle h2 {
  color: black;
}

.cateTitle h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}

</style>
