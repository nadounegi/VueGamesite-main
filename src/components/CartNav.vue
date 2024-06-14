<template>
  <div class="CartNav">
    <header>
      <div>
        <router-link to="/">
          <img :src="logo" alt="logo" class="logo"/>
        </router-link>
      </div>
      <div class="rightHeader">
        <form action="#">
          <input type="text" name="keywords" id="search" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください">
          <button type="submit"><img :src="searchIcon" alt=""></button>
        </form>
        <div class="cart">
          <router-link :to="cartLink">
            <h1>CART({{ cartQuantity }})</h1> 
            <img :src="shoppingCart" alt="">
          </router-link>
        </div>
        <div class="login-sign">
          <a href="">ログイン</a>
          <a href="">新規登録</a>
        </div>
      </div>  
    </header>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png';
import searchIcon from '@/assets/images/検索用の虫眼鏡アイコン.png';
import shoppingCart from '@/assets/images/shopping-cart.png';
import { mapGetters } from 'vuex';

export default {
  name: 'CartNav',
  data() {
    return {
      logo,
      searchIcon,
      shoppingCart,
      cartLink: "/GameDetail/:id/CartInfo"
    };
  },
  computed: {
    ...mapGetters({
      cartQuantity: 'cartQuantity'
    })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.CartNav {
  position: fixed;
  top: -35px;
  width: 100%;
  z-index: 1000;
}

.CartNav header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1000;
}

.logo {
  position: relative;
  height: 300px;
  bottom: 31px;
  right: 260px;
}

.rightHeader {
  display: flex;
  position: relative;
  bottom: 123px;
  right: 304px;
  align-items: center;
  gap: 16px;
}

.rightHeader form {
  list-style-type: none;
  position: relative;
  left: 75px;
  top: 2px;
}

input {
  margin-top: 200px;
  border-radius: 10px;
  border: none;
  width: 451px;
  background-color: #8080804d;
  height: 53px;
}

button {
  margin-top: 20px;
  background-color: transparent;
  border: none;
}

button img {
  width: 23px;
  position: relative;
  left: -13px;
  top: -18px;
}

:placeholder-shown {
  padding-top: 5px;
  padding-left: 20px;
}

.cart {
  position: relative;
  width: 188px;
  height: 64px;
  left: 55px;
  top: 101px;
  border-radius: 10px;
  background-color: #8080804d;
}

h1 {
  font-weight: bold;
  font-size: 25px;
  position: relative;
  left: 21px;
  top: 16px;
}

.cart img {
  position: relative;
  bottom: 22px;
  right: 53px;
  width: 30px;
  height: 30px;
}

.cart a {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-sign {
  position: relative;
  top: 114px;
  left: 92px;
  display: flex;
  justify-content: space-around;
  width: 200px;
}

.login-sign a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
</style>
