<template>
  <header class="navigation">
    <div class="navigation__top-header">
      <h3 class="navigation__title">NadouGame</h3>
    </div>
    <div class="navigation__bottom-header">
      <router-link to="#/Home">
        <img class="navigation__logo" 
        src="/src/assets/images/logo.png"  
        alt="logo" width="150" height="150">
      </router-link>
      <!-- 导航部分 -->
      <nav class="navigation__list" 
      :class="{ 'navigation__list--active': menuActive }"
      >
        <ul class="navigation__items">

          <li class="navigation__item" 
          v-for="item in menuItems" 
          :key="item.id" @mouseover="showMenu(item)" 
          @mouseleave="hideMenu(item)"
          >
            <router-link :to="item.href">
              {{ item.title }}
            </router-link>
            <!-- 子菜单 -->
            <ul class="navigation__dropdown-content" 
            v-if="item.showMenu"  
            @mouseover="keepMenuOpen(item)" 
            @mouseleave="hideMenu(item)"
            >
              <li class="navigation__sub-item" 
              v-for="subItem in item.subItems" 
              :key="subItem.id" 
              @mouseover="showSubMenu(item, subItem)" 
              @mouseleave="hideSubMenu(item, subItem)" 
              >
              <router-link :to="subItem.href">
                  <img class="navigation_icon" 
                  :src="subItem.icon" alt="" 
                  width="30px" height="30px"
                  >
                  {{ subItem.title }}
                </router-link>

                <!-- 子子菜单 -->
                <ul class="navigation__sub-dropdown-content" 
                v-if="subItem.showSubMenu && subItem.title !== 'PCゲーム'" 
                >
                <!-- PS4PS5 NintendoSwitch Xbox ナビゲーションnavigation__sub-sub-item X3 -->
                  <li class="navigation__sub-sub-item" 
                  v-for="subSubItem in subItem.subSubItems" 
                  :key="subSubItem.id">
                    <router-link :to="subSubItem.href">{{ subSubItem.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="navigation__item"><router-link to="/Mall">ゲーム購入</router-link></li>
          <li class="navigation__item"><router-link to="/info">最新情報</router-link></li>
        </ul>
        <div class="navigation__right-nav">
          <form action="#">
            <input type="text" class="navigation__search-input" 
            id="search" size="50" 
            placeholder="ゲーム名、又はカテゴリなどを入力してください">
            <button type="submit" 
            class="navigation__search-button">
              <img src="/src/assets/images/検索用の虫眼鏡アイコン.svg" alt="" 
              class="navigation__search-icon">
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
          subItems: [
            { 
              title: "ビデオゲーム",
              href: "/VideoGame",
              icon: "src/assets/images/videogames.png",
              showSubMenu: false,
              subSubItems: [
                { title: "PS4/PS5", href: "/Mall/PS4PS5" },
                { title: "Nintendo Switch", href: "/Mall/NintendoSwitch" },
                { title: "XboxOne", href: "/Mall/Xbox" },
              ],
            },
            { 
              title: "PCゲーム",
              href: "/Mall/PCGame",
              icon: "src/assets/images/pcgames.png"
            },
          ],
        },
      ],
    };
  },
  methods: {
    showMenu(item) {
      clearTimeout(item.timeoutId);
      this.$set(item, 'showMenu', true);
    },
    hideMenu(item) {
      const timeoutId = setTimeout(() => {
        this.$set(item, 'showMenu', false);
      }, 500);
      this.$set(item, 'timeoutId', timeoutId);
    },
    showSubMenu(item, subItem) {
      clearTimeout(subItem.timeoutId);
      this.$set(subItem, 'showSubMenu', true);
    },
    hideSubMenu(item, subItem) {
      const timeoutId = setTimeout(() => {
        this.$set(subItem, 'showSubMenu', false);
      }, 500);
      this.$set(subItem, 'timeoutId', timeoutId);
    },
    keepMenuOpen(item) {
      clearTimeout(item.timeoutId);
    },
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
}

.navigation {
  width: 100vw;
  position: relative;
  top: 66px;
  z-index: 1000;
}

.navigation__top-header {
  background-color: black;
  text-align: right;
  padding: 10px 20px;
}

.navigation__title {
  color: white;
  font-weight: bold;
}

.navigation__bottom-header {
  display: flex;
  align-items: center;
  height: 6vw;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid black;
}

.navigation__logo {
  width: 100px;
  height: 100px;
  position: relative;
  top: 1px;
}

.navigation__list {
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 148px;
}

.navigation__items{
  list-style: none;
  display: flex;
  padding: 0;
}

.navigation__item {
  margin: 0 15px;
  position: relative;
}

.navigation__item a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.navigation__item a:hover {
  color: #ff6600;
}

.navigation__dropdown-content, 
.navigation__sub-dropdown-content {
  display: none;
  position: absolute;
  width: 18vw;
  background-color: #11aec3;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.navigation__item:hover .navigation__dropdown_content,
.navigation__sub-item:hover .navigation__sub-dropdown-content {
  display: block;
}


.navigation___sub-dropdown-content {
  left: 100%;
  top: 0;
}

.navigation__right-nav{
  display: flex;
  align-items: center;
}

.navigation__right-nav form {
  display: flex;
  align-items: center;
}

.navigation__search-input {
  border-radius: 20px;
  border: 1px solid #cac9c9;
  padding: 5px 10px;
  width: 350px;
}

.navigation__search-input ::placeholder {
  font-size: 12px;
}

.navigation__search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.navigation__search-icon {
  width: 23px;
  margin-left: 10px;
  position: relative;
  top: 3px;
  left: -41px;
} */
* {
  margin: 0;
  padding: 0;
}

.navigation {
  margin-top: 148px;
  width: 100vw;
  position: relative;
  z-index: 1000;
}

.navigation__top-header {
  background-color: black;
  text-align: right;
  padding: 10px 20px;
}

.navigation__title {
  color: white;
  font-weight: bold;
}

.navigation__bottom-header {
  display: flex;
  align-items: center;
  height: 6vw;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid black;
}

.navigation__logo {
  width: 110px;
  height:110px;
}

.navigation__list {
  margin-right: 232px;
  list-style: none;
  display: flex;
  align-items: center;
}

.navigation__items {
  list-style: none;
  display: flex;
  padding: 0;
}

.navigation__item {
  margin: 0 15px;
  position: relative;
}

.navigation__item a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.navigation__item a:hover {
  color: #ff6600;
}

.navigation__dropdown-content,
.navigation__sub-dropdown-content {
  display: none;
  position: absolute;
  width: 18vw;
  background-color: #f9f9f9; /* Set background color */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.navigation__item:hover .navigation__dropdown-content,
.navigation__sub-item:hover .navigation__sub-dropdown-content {
  display: block;
}

.navigation__sub-item{
  list-style-type: none;
  position: relative;
  left: 21px;
}

.navigation__sub-sub-item{
  list-style-type: none;
  position: relative;
  left: 15px;
}

.navigation__sub-dropdown-content {
  left: 91%;
  top: 0;
}

.navigation__right-nav {
  display: flex;
  align-items: center;
  margin-right: -41px;
  position: relative;
  left: 48px;
}

.navigation__search-input {
  border-radius: 20px;
  border: 1px solid #cac9c9;
  padding: 5px 10px;
  width: 330px;

}

.navigation__search-input::placeholder {
  font-size: 12px;
}

.navigation__search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.navigation__search-icon {
  width: 23px;
  position: relative;
  left: -44px;
  top: 9px;
  margin-left: 10px;
}
</style>
