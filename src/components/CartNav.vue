<template>
  <div class="cart-nav">
    <header class="cart-nav__header">
      <div class="cart-nav__logo-container">
        <router-link to="/" class="cart-nav__logo-link">
          <img :src="logo" alt="logo" class="cart-nav__logo"/>
        </router-link>
      </div>
      <div class="cart-nav__right-header">
        <form action="#" class="cart-nav__form">
          <input type="text" name="keywords" class="cart-nav__search-input" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください">
          <button type="submit" class="cart-nav__search-button"><img :src="searchIcon" alt=""></button>
        </form>
        <div class="cart-nav__cart">
          <router-link :to="cartLink" class="cart-nav__cart-link">
            <div class="cart-nav__cart-content">
            <img class="cart-nav__cart-icon" :src="shoppingCart" alt="">
            <h1 class="cart-nav__cart-title">CART({{ cartQuantity }})</h1> 
          </div>
          </router-link>
        </div>
        <div class="cart-nav__login-sign">
          <a href="" class="cart-nav__login-link">ログイン</a>
          <a href="" class="cart-nav__signup-link">新規登録</a>
        </div>
      </div>  
    </header>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png';
import searchIcon from '@/assets/images/検索用の虫眼鏡アイコン.svg';
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cart-nav {
  position: fixed;
  top: 44px;
  left: 133px;
  width: 100%;
  z-index: 1000;
}

.cart-nav__header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  width: 100%;
  z-index: 1000;
}

.cart-nav__logo {
  width: 150px;
  height: auto;
  position: relative;
  right: 183px;
  top: 59px;
}

.cart-nav__logo-link {
  position: relative;
  right: 195px;
  height: 158px;
  top: -80px;
}

.cart-nav__right-header {
  display: flex;
  position: relative;
  bottom: 123px;
  right: 202px;
  width: 393px;
  height: 249px;
  align-items: center;
  gap: 16px;
}

.cart-nav__form {
  list-style-type: none;
  height: 50px;
  position: relative;
  right: 121px;
  top: 105px;
}

.cart-nav__search-input{
  border-radius: 10px;
  border: none;
  width: 350px;
  background-color: #8080804d;
  height: 53px;
}

.cart-nav__search-input:placeholder-shown {
  padding-top: 5px;
  padding-left: 8px;
}


.cart-nav__search-button {
  background-color: transparent;
  border: none;
  position: relative;
  bottom: 38px;
  left: 317px;
}

.cart-nav__search-button img {
  width: 22px;
  position: relative;
  right: 3px;
  top: 4px;
}

.cart-nav__cart {
  position: relative;
  width: 154px;
  height: 50px;
  right: 93px;
  top: 105px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #8080804d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-nav__cart-content{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
}

.cart-nav__cart-title {
  font-weight: bold;
  font-size: 18px;
  position: relative;
  left: 12px;
  top: 3px;
}

.cart-nav__cart-icon {
  position: relative;
  bottom: 0px;
  left: 0;
  width: 24px;
  height: 26px;
}

.cart-nav__cart-link {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cart-nav__login-sign {
  position: relative;
  top: 114px;
  right: 77px;
  display: flex;  
  justify-content: space-around;
  width: 200px;
}

.cart-nav__login-link,
.cart-nav__signup-link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  width: 126px;
  height: 29px;
}

</style>
