<template>
  <!-- 循环遍历cartList，并在同一个循环中渲染类别标题和项目详细信息，以确保 'item' 已定义 -->
  <div>
    <div class="cart-item">
      <!-- 项目详细信息 -->
      <div class="cart-item__img">
        <!-- 用 router-link 标签包裹 img 标签，以便在单击图像时导航到详细信息页面 -->
        <router-link 
          :to="{name: 'GameDetail', params:{id: item.id}}"
        >
          <img :src="item.url" :alt="item.name" 
            width="120px" height="180px"
          >
        </router-link>
      </div>
      <div class="cart-item__info">
        <p class="cart-item__name">ゲーム名:{{ item.name }}</p>
        <p class="cart-item__category">カテゴリー:{{ item.category }}</p>
        <p class="cart-item__price">価格:{{formattedPrice(item.price) }}</p>
        <p class="cart-item__stock">在庫:残り{{ item.stock }}個</p>
        <!-- 按钮部分 -->
        <div class="cart-item__btns">
          <button class="cart-item__btn" 
            @click="decreaseCount" 
            :disabled="count <= 0"
          >
            -
          </button>
          <span class="cart-item__count">{{ count }}</span>
          <button class="cart-item__btn" 
            @click="increaseCount" 
            :disabled="count >= item.stock" 
          >
            +
          </button>
        </div>
        <!-- 添加到购物车按钮 -->
        <div class="cart-item__button-container">
          <button class="cart-item__add-button" 
            @click="addToCart"
          >
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.item.id,
        url: this.item.url,
        name: this.item.name,
        price: this.item.price,
        quantity: this.count
      });   
    },
    formattedPrice(price) {
      return price.toLocaleString('ja-JP', {
        style: 'currency',
        currency: 'JPY'
      });
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
    increaseCount() {
      if (this.count < this.item.stock) {
        this.count += 1;
      }
    },
  }
}
</script>

<style>
html, body {
  height: 100%;
  /* overflow: hidden; */
  max-width: 2048px;
  margin: 0;
  padding: 0;
}
.main-component__main {
  display: flex;
  height: 100vh;
  margin-top: 0;
}

.main-component__container {
  flex-grow: 1;
  margin-left: 310px;
  height: calc(100vh - 60px); /* 适当调整高度 */
  margin-top: 10px; /* 调整顶部间距 */
  overflow-y: auto; 
  padding: 20px; /* 添加内边距 */
}

.breadcrumb {
  margin-left: 22px;
  font-size: 14px;
  top: 174px;
  left: 3px;
  position: fixed;
}

.main-component__cart-list {
  display: flex;
  flex-wrap: wrap;
  justify-content:  flex-start;
  gap: 20px; /* 添加间距 */
  overflow-x: hidden;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 245px;
  height: 350px;
  margin-left: 419px;
  padding: 10px;
  box-sizing: border-box;
  border: rgb(162, 157, 157) solid 1px;
  position: relative;
  top: 48px;
}

.cart-item__img img {
  border-radius: 10px;
  width: 80px;
  height: 100px;
  object-fit: cover;
  text-align: center;
}

.cart-item__info {
  flex-grow: 1;
  width: 100%;
}

.cart-item__name{
  font-size: 11px;
  width: 205px;
}

.cart-item__category{
  font-size: 11px;
  width: 205px;
}

.cart-item__price{
  font-size: 12px;
  width: 205px;
}

.cart-item__stock{
  font-size: 12px;
  width: 205px;
  margin-bottom: 10px;
}

.cart-item__btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* 间距调整为10px */
}

.cart-item__btn {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 25%;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-item__count {
  position: relative;
  top: 11px;
  font-size: 20px;
}

.cart-item__button-container {
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 10px;
  position: relative;
  bottom: 14px;
  left: 52px;
}

.cart-item__add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  height: 41px;
  width: 100%;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left, rgb(130, 130, 255), rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
}

.cart-item__add-button:hover {
  animation: gradient-animation 3s infinite alternate;
}

@keyframes gradient-animation {
  0% {
    background-image: linear-gradient(to right, rgb(130, 130, 255), rgb(237, 46, 237));
  }
  100% {
    background-image: linear-gradient(to right, rgb(51, 223, 238), rgb(36, 116, 220));
  }
}
</style>
