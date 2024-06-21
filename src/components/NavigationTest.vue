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
      </nav>
      <div class="right_nav">
        <form action="#">
          <input type="text" name="search" id="search" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください" name2="keywords">
          <button type="submit"><img src="src/assets/images/検索用の虫眼鏡アイコン.png" alt=""></button>
        </form>
      </div>
    </div>
    <router-view></router-view>
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

<style scoped>
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
  margin-right: 20px;
  position: relative;
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
  margin-left: 146px;
  margin-top: -46px;
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
  width: 399px;
  height: 37px;
}

button {
  background-color: transparent;
  border: none;
}

button img {
  width: 23px;
  position: relative;
  right: 26px;
  top: -16px;
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
@media (max-width: 1279px) {
  .right_nav {
    margin-bottom: 143px;
  }

  button img {
    width: 23px;
    position: relative;
    left: 368px;
    top: -44px;
  }
}

@media (max-width: 900px) {
  .hd {
    width: 100vw;
    position: relative;
    top: 0px;
  }

  .nav_list li {
    margin-left: -85px;
    position: relative;
    left: 39px;
  }

  .sub_dropdown a{
    position: relative;
    left: 39px;
  }
  .sub_dropdown_content{
    display: none;
    list-style: none;
    position: absolute;
    width: 162px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    margin-left: 205px;
    margin-top: -46px;
  }

  .sub_dropdown_content li a{
    position: relative;
    left: 67px;
  }


  .logo {
    position: relative;
    height: 136px;
  }
}

@media (max-width: 768px) {
  .hd {
    width: 100vw;
    position: relative;
    top: -3px;
  }
  .nav_list li {
    margin-left: -85px;
    position: relative;
    left: 81px;
  }

  .hamburger {
    position: relative;
    left: 447px;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .bottom_header img {
    margin-left: 10px;
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
