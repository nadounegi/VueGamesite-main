<template>
  <div>
    <CartNav/>
    <div class="main">
      <SideMenu/>
      <div class="mainContainer">
        <BreadCrumb/>
        <CateTitle :title="titleCategory"/>
        <div class="CartList">
          <CartItemTest v-for="item in VGList" :key="item.id" :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
export default {
  components: {
    SideMenu,
  },
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

.main {
  display: flex;
  height: 100vh; /* 确保整个视口高度 */
}

.CartNav {
  position: fixed;
  top: 0;
  left: 132px;
  width: 100%;
  z-index: 1000;
}

.mainContainer {
  flex-grow: 1;
  margin-left: 310px; /* 留出 SideMenu 的空间 */
  height: calc(100vh - 60px); /* 适合视口高度 */
  margin-top: 308px;
  overflow-y: auto;
}

.SideMenu {
  position: fixed;
  top: 296px;
  left: 0;
  height: calc(100vh - 60px);
  width: 308px;
  background-color: #f1f1f1;
  border-right: solid 1px #8080804d;
  z-index: 1000;
}

.breadcrumb {
  margin-left: 320px;
   font-size: 14px;
   top: 248px;
   left: 73px;
   position: fixed;
}

.cateTitle {
  margin-left: 320px;
  top: 300px; /* 根据需要调整 */
  position: fixed;
}

.CartList {
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    height: calc(100vh - 377px);
}
.cartItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 246px;
    left: 155px;
    height: 409px;
    margin-left: 157px;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
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

@media (max-width: 1060px){
  .breadcrumb{
    margin-left: 320px;
    font-size: 14px;
    top: 214px;
    left: 73px;
    position: fixed;
}
}
</style>