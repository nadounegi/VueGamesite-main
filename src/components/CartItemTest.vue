<template>
  <!-- 循环遍历cartList，并在同一个循环中渲染类别标题和项目详细信息，以确保 'item' 已定义 -->
  <div>
    <div class="cartItem">
      <!-- 项目详细信息 -->
      <div class="cartItemImg">
        <!-- 用 router-link 标签包裹 img 标签，以便在单击图像时导航到详细信息页面 -->
        <router-link :to="{name: 'GameDetail',params:{id: item.id}}">
          <img :src="item.url" :alt="item.name" width="120px" height="180px">
        </router-link>
      </div>
      <div class="cartItemInfo">
        <p>ゲーム名:{{ item.name }}</p>
        <h3>カテゴリー:{{ item.category }}</h3>
        <p>価格:{{formattedPrice(item.price) }}</p>
        <p>在庫:残り{{ item.stock }}個</p>
        <!-- 按钮部分 -->
        <div class="cartBtns">
          <button @click="decreaseCount" :disabled="count <= 0" class="cartBtn">-</button>
          <span>{{ count }}</span>
          <button @click="increaseCount" :disabled="count >= item.stock" class="cartBtn">+</button>
        </div>
        <!-- 添加到购物车按钮 -->
        <div class="buttonContainer">
          <button @click="addToCart" class="cartButton">カートに入れる</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      count:0
    };
  },
  methods:{
    addToCart(){
      this.$store.dispatch('addToCart',{// カートに追加
        id: this.item.id,
        url:this.item.url,
        name:this.item.name,
        price:this.item.price,
        quantity:this.count
      });   
    },
    formattedPrice(price){
      return price.toLocaleString('ja-JP',{
        style:'currency',
        currency:'JPY'
      });
    },
    decreaseCount(){
      if(this.count > 0){
        this.count-=1;
      }
    },
    increaseCount(){
      if(this.count < this.item.stock){
        this.count+=1;
      }
    },
   
  }
}
</script>

<style scoped>
.cartItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 245px;
  height: 409px;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}

.cartItemImg img {
  border-radius: 10px;
}

.cartItemInfo {
  flex-grow: 1;
}

.cartItemInfo h3 {
  font-weight: normal;
  font-size: 15px;
}

.cartItemInfo p:first-child {
  font-weight: bolder;
  font-size: 18px;
}

.cartItemInfo p:first-child {
  width: 240px;
    position: relative;
    top: 9px;
    font-weight: bolder;
    font-size: 15px;

}

/* 按钮部分 */
.cartBtns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  position: relative;
  bottom: 30px;
  left: 0;
}

.cartBtn {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 29%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  position: relative;
  font-size: 20px;
  top: 8px;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.cartButton {
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
  position: absolute;
  bottom: 23px;
}

.cartButton:hover {
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
