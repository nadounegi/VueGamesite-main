<template>
  <div class="CartNav">
    <header class="headerBar">
      <div>
        <router-link to ="/" ><img src="src/assets/images/logo.png" alt="logo" class="logo"/></router-link>
      </div>
      <div class="rightHeader">
        <form action="#">
          <input type="text" name="keywords" id="search" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください" name2="keywords">
          <button type="submit"><img src="src/assets/images/検索用の虫眼鏡アイコン.png" alt=""></button>
        </form>
        <div class="cart">
          <a href="">
            <h1>CART</h1> 
            <img src="src/assets/images/shopping-cart.png" alt="">
          </a>
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
export default {
  name: 'CartNav',
};
</script>
<style >

*{
  margin: 0;
  padding: 0;
}

/* ヘッダー部分 */
.headerBar {
  position: fixed;
  left: 10px;
  top: -59px;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  height: 250px;
}

/* 页面主体部分的样式 */
.logo{
    width: 300px;
    height: 300px;
    top: 44px;
}

/* 右ヘッダー部分 */
/* 検索 */
.rightHeader{
    bottom: 302px;
    left: 440px;
    position: relative;
}

form{
    bottom: 44px;
    list-style-type: none;
    position: relative;
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

button img{ 
    width: 23px;
    position: relative;
    left: -33px;
    top: 6px;
}
:placeholder-shown {
    padding-top: 5px;
    padding-left: 20px;
}

/* ショップカート部分 */
.cart{
    position: relative;
    width: 188px;
    height: 64px;
    left: 573px;
    bottom: 104px;
    border-radius: 10px;
    background-color: #8080804d;
}

h1{
    font-weight: bold;
    font-size: 25px;
    position: relative;
    left: 21px;
    top: 16px;
}

.cart img{
  position: relative;
  bottom: 23px;
    right: 53px;
    width: 30px;
    height: 30px;
}
.cart a{
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* ログイン新規登録部分 */
.login-sign{
    position: relative;
    left: 776px;
    bottom: 139px;
    display: flex;
    justify-content: space-around;
    width: 200px;
}
.login-sign a{
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
}
</style>