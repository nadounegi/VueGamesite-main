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
html,body{
  height: 100%;
  /* margin: 0; */
  overflow: hidden;
}

.main{
  display: flex;
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.main .content {
    position: relative;
    left: 198px;
    margin-top: 177px;
    margin-left: -19px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 1339px;
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