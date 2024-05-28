<template>
  <div>
    <CartNav/>
    <div class="main">
      <SideMenu />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
export default {

  name: 'Mall',
  components: {
    SideMenu,
  },
  
methods: {
  filteredItems(category) {
    return this.cartList.filter(item => item.gameCategory === category);
  }
},
  };
</script>

<style >
.main{
  display: flex;
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow-y: hidden;
}

.content{
  position: relative;
  margin-top: 153px;
  margin-left: 291px;
  height: calc(125vh - 488px);
  /* bottom: 43px; */
  overflow-y: auto;
  overflow-x: hidden;
  width: 1231px;
}
.navList {
  margin: 20px 0;
  font-size: 14px;
}

/* Fixed CartNav */
.CartNav{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
/* Fixed SideMenu */
</style>