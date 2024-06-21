<template>
  <header class="hd">
    <div class="top_header">
      <h3>NadouGame</h3>
    </div>
    <div class="bottom_header">
      <router-link to="#/Home">
        <img src="src/assets/images/logo.png" class="logo" alt="logo" width="150" height="150">
      </router-link>
      <!-- 汉堡菜单图标 -->
      <div :class="['hamburger', { active: menuActive }]" @click="toggleMenu">
        <div class="line" v-for="i in 3" :key="i"></div>
      </div>
      <!-- ナビゲーション部分 -->
      <nav class="nav_list" :class="{ active: menuActive }">
        <li v-for="item in menuItems" :key="item.id" @mouseover="showMenu(item)" @mouseleave="hideMenu(item)" class="dropdown">
          <router-link :to="item.href">{{ item.title }}</router-link>
          <!-- サブメニュー -->
          <ul v-if="item.showMenu" class="dropdown_content" @mouseover="keepMenuOpen(item)" @mouseleave="hideMenu(item)">
            <li v-for="subItem in item.subItems" :key="subItem.id" @mouseover="showSubMenu(item, subItem)" @mouseleave="hideSubMenu(item, subItem)" class="sub_dropdown">
              <router-link :to="subItem.href">
                <img :src="subItem.icon" alt="" width="30px" height="30px">
                {{ subItem.title }}
              </router-link>
              <!-- サブサブメニュー -->
              <ul v-if="subItem.showSubMenu && subItem.title !== 'PCゲーム'" class="sub_dropdown_content">
                <li v-for="subSubItem in subItem.subSubItems" :key="subSubItem.id">
                  <router-link :to="subSubItem.href">{{ subSubItem.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><router-link to="/Mall">ゲーム購入</router-link></li>
        <li><router-link to="/info">最新情報</router-link></li>
        <div class="right_nav">
          <form action="#">
            <input type="text" name="search" id="search" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください" name2="keywords">
            <button type="submit">
              <img src="src/assets/images/検索用の虫眼鏡アイコン.svg" alt=""  class="search-icon">
            </button>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      menuItems: [
        {
          title: "ゲーム",
          href: "/MallTopTest",
          showMenu: false,
          isMouseOverSubMenu: false,
          subItems: [
            { 
             title: "ビデオゲーム",
             href: "/VideoGame",
             icon:"src/assets/images/videogames.png",
             showSubMenu: false,
             timeoutId: null,
             subSubItems: [
                {
                  title: "PS4/PS5",
                  href: "/Mall/PS4PS5"
                },
                {
                  title: "Nintendo Switch",
                  href: "/Mall/NintendoSwitch"
                },
                {
                  title: "XboxOne",
                  href: "/Mall/Xbox"
                },
              ],
            },
            {
             title: "PCゲーム",
             href: "/Mall/PCGame",
             icon:"src/assets/images/pcgames.png"
            },     
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      this.$emit('update:dropdownActive', this.menuActive);
    },
    showMenu(item) {
      clearTimeout(item.timeoutId);
      this.$set(item,'showMenu',true);
      this.$emit('update:dropdownActive', true);
    },
    hideMenu(item) {
      const timeoutId = setTimeout(() => {
        if(!item.isMouseOverSubMenu){
          this.$set(item,'showMenu',false);
          this.$emit('update:dropdownActive', false);
        }
      }, 500);
      this.$set(item,'timeoutId',timeoutId);
    },
    showSubMenu(item, subItem) {
      item.isMouseOverSubMenu = true;
      clearTimeout(subItem.timeoutId);
      this.$set(subItem,'showSubMenu',true);
    },
    hideSubMenu(item, subItem) {
      const timeoutId = setTimeout(() => {
        this.$set(subItem,'showSubMenu',false);
        item.isMouseOverSubMenu = false;
      },500);
      this.$set(subItem,'timeoutId',timeoutId);
    },
    keepMenuOpen(item) {
      clearTimeout(item.timeoutId);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* ヘッダー部分 */
.hd {
  width: 100vw;
  position: relative;
}

.top_header {
  background-color: black;
  text-align: right;
}

.top_header h3 {
  color: white;
  margin-right: 20px;
  font-weight: bolder;
}

.bottom_header {
  display: flex;
  align-items: center;
  height: 4vw;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: solid 1px black;
}

.bottom_header img {
  margin-top: -7px;
}

.nav_list {
  list-style: none;
  display: flex;
  padding: 20px;
  align-items: center;
}

.nav_list li {
  list-style: none;
  display: flex;
  padding: 20px;
  position: relative;
  right: 188px;
  align-items: center;
}

.nav_list li a {
  color: black;
  font-weight: bolder;
  text-decoration: none;
}

.nav_list li a:hover {
  color: #ff6600;
}

.dropdown {
  position: relative;
}

.dropdown_content {
  display: none;
  list-style: none;
  width: 119px;
  font-weight: bolder;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.nav_list .dropdown:hover .dropdown_content {
  display: block;
}

.sub_dropdown {
  position: relative;
}

.sub_dropdown img {
  margin-top: 0px;
}

.sub_dropdown_content {
  display: none;
  list-style: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 133px;
  margin-left: 116px;
  margin-top: -46px;
}

.sub_dropdown_content li a{
  width: 20px;
}

.nav_list .sub_dropdown:hover .sub_dropdown_content {
  display: block;
}

.dropdown_content li a {
  color: black;
  font-weight: bolder;
  width: 173px;
  padding: 12px 5px;
  text-decoration: none;
}

.right_nav {
  margin-bottom: 163px;
}

form {
  position: relative;
  top: 83px;
  right: 133px;
  list-style-type: none;
}

input {
  border-radius: 20px;
    border: solid 1px #cac9c9;
    width: 349px;
    height: 37px;
    padding-left: 9px;
    padding-top: 10px;
}

/* 确保各个浏览器都支持的占位符样式 */
input::placeholder {
    font-size: 12px;
    position: relative;
    left: 15px;
    bottom: 7px;
}

button {
  background-color: transparent;
  border: none;
}

.search-icon {
  width: 23px;
  filter: invert(56%) sepia(0%) saturate(4425%) hue-rotate(159deg) brightness(143%) contrast(92%);
}

button img {
  width: 23px;
  position: relative;
  right: 37px;
  top: -2px;
}

/* 汉堡菜单样式 */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.hamburger .line {
  width: 100%;
  height: 3px;
  background-color: black;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.hamburger.active .line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 响应式样式 */


/* max-width: 1024px max-height: 1366px */
@media only screen and (max-width: 1024px) and (max-height: 1366px) {
  .bottom_header {
    display: flex;
    align-items: center;
    height: 9vw;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: solid 1px black;
  }

  .nav_list li {
    margin-right: -1px;
    width: 11vw;
    position: relative;
    right: 22px;
  }

  form {
    position: relative;
    top: 80px !important;
    right: 38px !important;
    list-style-type: none;
  }

  button img {
    width: 23px;
    position: relative;
    right: 33px;
    top: 0;
  }
}

/* max-width:1024px max-height: 874px */
@media only screen and (max-width: 1024px) and (max-height: 874px) {
  .hamburger {
    display: none;
  }
  .bottom_header {
    display: flex;
    align-items: center;
    height: 8vw;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: solid 1px black;
  }
  .nav_list li {
    margin-right: 3px;
    width: 12vw;
    position: relative;
  }
  .right_nav {
    margin-bottom: 143px;
  }

  form {
    position: relative;
    top: 72px !important;
    right: 19px !important;
    list-style-type: none;
  }
}

/* iphone 14 Pro Max max-width: 430px max-height: 932px */
@media only screen and (max-width: 430px) and (max-height: 932px) {
  .hd {
    width: 100vw;
    position: relative;
    top: -3px;
  }

  .top_header {
    display: flex;
    background-color: black;
    height: 3.5vh;
    text-align: right;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .top_header h3 {
    display: flex;
    color: white;
    font-size: 17px;
    margin-right: 20px;
    font-weight: bolder;
  }
  .nav_list li {
  position: relative; /* 确保伪元素的位置相对于父元素 */
  display: flex;
  margin-left: -99px;
  left: 60px;
  bottom: 23px;
  line-height: 0.1;
  width: 54vw;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #cac9c9; /* 设置伪元素的border-bottom */

}


  .hamburger {
    position: relative;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .bottom_header {
    display: flex;
    align-items: center;
    height: 17vw;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: solid 1px black;
  }
  .bottom_header img {
    margin-left: 10px;
  }

  .logo {
    position: relative;
    width: 12vh;
    height: 13vh;
    right: 39px;
  }
  .nav_list {
    display: none;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    position: absolute;
    top: 105px;
    left: 0;
    text-align: center;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .nav_list.active {
    display: flex;
  }

  .right_nav {
    margin-bottom: 0;
    position: relative;
    left: 22px;
    bottom: 84px;
  }

  form {
    position: relative;
    top: 97px;
    right: 97px;
    list-style-type: none;
  }
  input {
    position: relative;
    width: 32vh;
    top: 6px;
    left: 29px;
    padding-left: 0px;
    padding-top: 10px;
    }
  input::placeholder{
    font-size: 12px;
    position: relative;
    left: 15px;
    bottom: 7px;
  }
  .hamburger {
    display: flex;
  }

  .sub_dropdown_content {
    display: none;
    list-style: none;
    position: absolute;
    width: 159px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    left: 125px;
    top: 10px;
    margin-left: 46px;
    margin-top: -46px;
  }
}
</style>