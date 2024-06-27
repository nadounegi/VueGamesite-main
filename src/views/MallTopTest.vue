<template>
  <div class="main">
    <div class="main__content">
    <PS4PS5 class="main__ps4ps5"/>
    <NS class="main__ns"/>
    <Xbox class="main__xbox"/>
    <PC class="main__pc"/>  
  </div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {   
      uniqueCategories: ["PS4・PS5", "Nintendo Switch", "Xbox", "PC"],
    };
  },
  methods: {
    filteredItems(category) {
      return this.cartList.filter(item => item.gameCategory === category);
    },
    getCategoryLink(category) {
      const item = this.cartList.find(item => item.gameCategory === category);
      return item ? item.href : '#';
    },
  },
};
</script>

<style scoped>
html,body{
  height: 100%;
  margin: 0;
  overflow: hidden;
}
.main {
  display: flex;
  flex-direction: column;
  width: 1091px;
  margin-top: 0;
  height: calc(100vh - 55px);
  overflow: auto;
}

.main__content{
  position: relative;
  top: 27px;
  right: 40px;
}

.cate-title {
  position: relative;
  left: 27px;
  top: 34px;
  margin-bottom: 40px;
}

.cate-title__h2 {
  color: black;
}

.cate-title__h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 271px;
  height: 432px;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  left: 100px;
}

.breadcrumb {
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}

/* Fixed CartNav */
.cart-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

</style>
