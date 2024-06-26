<template>
  <div class="main-component">
    <CartNav/>
    <div class="main-component__content">
     <SideMenu/>
      <div class="main-component__container">
        <CateTitle class="main-component__cate-title" 
          :title="titleCategory" 
          :to="'VideoGame'" 
          :showLink="false"
        />
        <div class="main-component__cart-list">
          <CartItemTest 
          class="main-component__cart-item"
            v-for="item in VGList" 
            :key="item.id" 
            :item="item"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    titleCategory() {
      return "テレビゲーム";
    },
    VGList() {
      return this.$store.getters['VideoGame/VGList']
    },
  },
  created() {
    this.$store.dispatch('VideoGame/getVGList')
  },
}
</script>

<style scoped>
html, body {
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.main-component__content {
  display: flex;
  height: 100vh;
  margin-top: 0;
}

.main-component__container {
  flex-grow: 1;
  margin-left: 8px;
  margin-top: 200px;
  padding-top: 51px;
  position: relative;
}

.main-component__breadcrumb {
  margin-left: 22px;
  font-size: 14px;
  top: 118px;
  left: 254px;
  position: fixed;
}

.main-component__cate-title {
  margin-left: 275px;
  bottom: 0px;
  position: absolute;
  margin-bottom: 0px;
  width: 206px;
}

.main-component__cate-title >>> h2 {
  position: relative;
  bottom: 48px;
}

.main-component__cart-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: calc(87vh - 160px);
  overflow-x: hidden;
  margin-left: 20px;
  position: relative;
  left: 21px;
    /* bottom: 106px; */
}

.main-component__cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 271px;
  height: 381px;
  margin-left: -42px;
  padding-right: 32px;
  box-sizing: border-box;
  position: relative;
  right: -4px;
  bottom: 48px;
}

.main-component__cart-item >>> .cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 197px;
  height: 350px;
  margin-left: 419px;
  padding: 10px;
  box-sizing: border-box;
  border: rgb(162, 157, 157) solid 1px;
  position: relative;
  top: 48px;
}

.main-component__cart-item >>> .cart-item__info{
  flex-grow: 1;
  width: 100%;
}

.main-component__cart-item >>> .cart-item__info .cart-item__name{
  position: relative;
  bottom: 8px;
  font-size: 13px;
}

.main-component__cart-item >>> .cart-item__info .cart-item__category{
  position: relative;
  bottom: 8px;
  font-size: 14px;
    
}

.main-component__cart-item >>> .cart-item__info h3{
    margin: 0;
    position: relative;
    bottom: 9px;
}

.main-component__cart-item >>> .cart-item__info p{
    margin-top: 6px;
    position: relative;
    bottom: 9px;

}

.main-component__cart-item-img img {
    border-radius: 10px;
    height: 12vw;
    width: 10vw;
}

.main-component__cart-item >>> .cart-item__btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* 间距调整为10px */
  position: relative;
  bottom: 17px;
}

.main-component__cart-item >>> .cart-item__count{
  position: relative;
  top: 3px;
  font-size: 20px;
}

.main-component__cart-item >>> .cart-item__button-container{
    display: flex;
    justify-content: center;
    width: 85%;
    margin-top: 10px;
    position: relative;
    bottom: 10px;
    left: 10px;
}
</style>
