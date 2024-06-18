<!-- SideMenu.vue -->
<template>
  <div class="SideMenu">
    <div class="SideMenuItem">
      <h2>カテゴリー</h2>
      <ul>
        <li><router-link to="/MallTopTest">すべて</router-link></li>
        <li><router-link to="/Mall/PS4PS5">PS4・PS5</router-link></li>
        <li><router-link to="/Mall/NintendoSwitch">Nintendo Switch</router-link></li>
        <li><router-link to="/Mall/Xbox">Xbox</router-link></li>
        <li><router-link to="/Mall/PCGame">PCゲーム</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>

<style>
.SideMenu{
  position: fixed;
  top: 237px;
  left: 2px;
  height: calc(81vh - 60px);
  width: 308px;
  background-color: #f1f1f1;
  border-right: solid 1px #8080804d;
  z-index: 1000;
}

.SideMenuItem{
  position: relative;
  bottom: 89px;
}

.SideMenu h2{
  position: relative;
  left: 45px;
  bottom: 311px;
  font-size: 35px;
  margin-top: 0px;
}

.SideMenu ul{
  top: 168px;
  position: relative;
  }

.SideMenu li{
  position: relative;
  left: 45px;
  bottom: 46px;
  list-style-type: none;
  line-height: 2.0;
  margin-top: 10px;
}

.SideMenu a{
  text-decoration: none;
  color: black;
  font-size: 30px;
}
</style>
