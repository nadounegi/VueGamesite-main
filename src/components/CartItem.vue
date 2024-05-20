<template>
  <!-- 循环遍历cartList，并在同一个循环中渲染类别标题和项目详细信息，以确保 'item' 已定义 -->
  <div>
    <div class="cartItem">
      <!-- 项目详细信息 -->
      <div class="cartItemImg">
        <img :src="item.url" :alt="item.name" width="120px" height="180px">
      </div>
      <div class="cartItemInfo">
        <h3>カテゴリー:{{ item.category }}</h3>
        <p>ゲーム名:{{ item.name }}</p>
        <p>価格:{{ item.price }}</p>
        <p>在庫:残り{{ item.stock }}個</p>
        <button class="cartButton">カートに入れる</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name:'CartItem',
  props:{
    item:Object
  }
}
</script>

<style>

.cartItem{
  display: flex;
  margin-left: 22px;
  margin-bottom: 20px;
}
.cartItemImg{
  margin-right: 15px;
}

.cartItemImg img{
  border-radius: 10px;
}
.cartItemInfo{
  flex-grow: 1;
}
.cartItemInfo h3{
  font-size: 15px;
}
.cartItemInfo p{
  font-size: 13px;
}
/* ボタン部分 */
.cartButton{
  color: white;
  font-weight: bold;
  height: 41px;
  width: 115px;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left ,rgb(130, 130, 255),rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
}
.cartButton:hover{
  animation:gradient-animation 3s infinite alternate;
}
@keyframes gradient-animation{
  0%{
    background-image: linear-gradient(to right,rgb(130, 130, 255),rgb(237, 46, 237));
  }
  100%{
    background-image:linear-gradient(to right,rgb(51, 223, 238),rgb(36, 116, 220));
  }
}
</style>
