<template>
  <div class="main-component">
    <CartNav/>
    <div class="main-component__content">
     <SideMenu/>
      <div class="main-component__container">
        <BreadCrumb class="main-component__breadcrumb"/>
        <CateTitle :title="titleCategory"  :to="'/MallTopTest'" :showLink="false" class="main-component__cate-title"/>
        <div class="main-component__cart-list">
          <CartItemTest 
          class="main-component__cart-item"
          v-for="item in VGList" 
          :key="item.id" 
          :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  computed:{
        titleCategory(){
            return "テレビゲーム";
        },
        VGList(){
            return this.$store.getters['VideoGame/VGList']
        },
    },
        created(){
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
  padding: 20px;
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
  top: 236px;
  position: fixed;
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
}

.main-component__cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 266px;
  height: 381px;
  margin-left: -20px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  right: 11px;
  bottom: 48px;
}

.cartItemImg img {
    border-radius: 10px;
    height: 12vw;
    width: 10vw;
}
.CartList.buttonContainer .cartButton {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: auto;
  height: 41px;
  width: 115px;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left, rgb(130, 130, 255), rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
}
</style>