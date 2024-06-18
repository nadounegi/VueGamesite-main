<template>
  <div>
      <BreadCrumb/>
    <PS4PS5/>
    <NS/>
    <Xbox/>
    <PC/>
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

.CartListItem .CartList {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  line-height: 1;
  left: 7px;
  bottom: 30px;
}
.CartListItem {
  position: relative;
  margin-right: 107px;
  margin-top: -29px;
  left: 166px;
  top: 5px;
}
.cateTitle {
  position: relative;
  left: 27px;
  top: 34px;
  margin-bottom: 40px;
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
.breadcrumb {
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}

/* Fixed CartNav */
.CartNav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
