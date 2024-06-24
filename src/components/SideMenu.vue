<!-- SideMenu.vue -->
<template>
  <div class="side-menu">
    <div class="side-menu__item">
      <h2 class="side-menu__title">カテゴリー</h2>
      <ul class="side-menu__list">
        <li class="side-menu__list-item">
          <router-link class="side-menu__list-link" 
          to="/MallTopTest">
          すべて
        </router-link>
        </li>
        <li class="side-menu__list-item">
          <router-link class="side-menu__list-link" 
          to="/Mall/PS4PS5">
          PS4・PS5
          </router-link>
        </li>
        <li class="side-menu__list-item">
          <router-link class="side-menu__list-link" 
          to="/Mall/NintendoSwitch">
          Nintendo Switch
          </router-link>
        </li>
        <li class="side-menu__list-item">
          <router-link class="side-menu__list-link" 
          to="/Mall/Xbox">
          Xbox
          </router-link>
        </li>
        <li class="side-menu__list-item">
          <router-link class="side-menu__list-link" 
          to="/Mall/PCGame">
          PCゲーム
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.side-menu {
    position: fixed;
    top: 181px;
    left: 0;
    width: 250px;
    height: 70%;
    background-color: #f1f1f1;
    border-right: solid 1px #8080804d;
    z-index: 1000;
    padding-top: 150px;
    box-sizing: border-box;
}

.side-menu__item  {
    padding: 20px;
    position: relative;
    bottom: 135px;
}

.side-menu__title{
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
}

.side-menu__list{
   list-style-type: none;
   padding: 0;
}

.side-menu__list-item{
   margin: 10px 0;
   text-align: center;
}

.side-menu__list-link{
  text-decoration: none;
  color: black;
  font-size: 20px;
  display: block;
  padding: 10px 0;
  transition: background-color 0.3s;
}

.side-menu__link:hover {
  background-color: #ddd;
}
</style>
