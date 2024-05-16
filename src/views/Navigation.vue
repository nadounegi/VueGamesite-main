<template>
    <header>
      <div class="top_header">
        <h3>NadouGame</h3>
      </div>
      <div class="bottom_header">
        <router-link to ="#/Home" class="logo"><img src="src/assets/images/logo.png" alt="" width="150" height="150"></router-link> 
        <nav class="nav_list">
            <li v-for="item in menuItems" :key="item.id"
            @mouseover="showMenu(item)" 
            @mouseleave="hideMenu(item)" class="dropdown">

              <a href="">{{ item.title }}</a>
              <ul v-if="item.showMenu" class="dropdown_content">
                <li v-for="subItem in item.subItems" :key="subItem.id"
                @mouseover="() => showSubMenu(item, subItem)" 
                @mouseleave="() => hideSubMenu(item, subItem)" class="sub_dropdown">
                    <a href=""><img :src="subItem.icon" alt="" width="30px" height="30px">{{ subItem.title }} </a>
                  <ul v-if="subItem.showSubMenu" class="sub_dropdown_content">
                    <li v-for="subSubItem in subItem.subSubItems" :key="subSubItem.id">
                      <a href="">{{ subSubItem.title }}</a>
                    </li>
                  </ul>
                </li>
            </ul>
        </li>
        <li><img src="" alt=""><router-link to ="/Mall">ゲーム購入</router-link></li>
        <li><img src="" alt=""><router-link to ="/info">最新情報</router-link></li>
        <div class="right_nav">
            <form action="#">
                <input type="text" name="search" id="search" size="50" placeholder="ゲーム名、又はカテゴリなどを入力してください" name2="keywords">
                <button type="submit"><img src="src/assets/images/検索用の虫眼鏡アイコン.png" alt=""></button>
            </form>  
        </div>
        </nav>
        <router-view></router-view>
      </div>
    </header>
  </template>
  

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "ゲーム",
          href: "#game",
          showMenu: false,
          isMouseOverSubMenu: false,
          subItems: [
            { 
             title: "ビデオゲーム",
             href: "#videogame",
             id:"arrow1",
             icon:"src/assets/images/videogames.png",
             showSubMenu: false,
             timeoutId: null,
             subSubItems: [
                {
                  title: "PS4/PS5",
                  href: "#ps4"
                },
                {
                  title: "Nintendo Switch",
                  href: "#ns"
                },
                {
                  title: "XboxOne",
                  href: "#xboxone"
                },
                ],
            },
            {
             title: "PCゲーム",
             href: "#pcgame",
             icon:"src/assets/images/pcgames.png"
            },     
          ],
        },
      ],
    };
  },
  methods: {
    showMenu(item) {
      // 取消延时隐藏（如果有）
      clearTimeout(item.timeoutId);
      this.$set(item,'showMenu',true);
    },
    hideMenu(item) {
      const timeoutId= setTimeout(() => {
        if(!item.isMouseOverSubMenu){// 如果鼠标在子菜单上，不隐藏
          this.$set(item,'showMenu',false)
        }
      }, 500); // 设置500毫秒延时
      this.$set(item,'timeoutId',timeoutId);
    },
     showSubMenu(item, subItem) {// 显示子菜单
      item.isMouseOverSubMenu = true;// 鼠标在子菜单上
      clearTimeout(subItem.timeoutId);
      this.$set(subItem,'showSubMenu',true);
    },
    hideSubMenu(item, subItem){// 隐藏子菜单
      const timeoutId = setTimeout(() => {
      this.$set(subItem,'showSubMenu',false);
      item.isMouseOverSubMenu = false;
    },500);
  }
}
};
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
}

/* ヘッダー部分 */
header{
    position: relative;
    top: 53px;
    width: 179vh;
}

.logo{
  background: none;
}  
  
.top_header{
   background-color: black;
}
.top_header h3{
    color: white;
    margin-right: 20px;
    text-align: right;
    font-weight: bolder;
}
.bottom_header{
    height: 75px;
    border-bottom: solid 1px black;
}
.bottom_header img{
    margin-left: -17px;
    margin-top: -39px;
}
/* ナビゲーション部分 */
.nav_list{
    list-style: none;
    display: flex;
    padding: 20px;
    align-items: center;
    height: 75px;
    margin-left: 190px;
    margin-top: -112px;
}

.nav_list li{
    margin-right: 20px;
    position: relative;

}


.nav_list li a{
    color: black;
    bottom: 20px;
    background: none;
    width: 137px;
    margin-right: 76px;
    font-weight: bolder;
    text-decoration: none;
    position: relative;
    display: inline-block;
}

.nav_list li a:hover{
    color: #ff6600;
}
/* 矢印 */
#arrow{
    position: absolute;
    transition: transform 0.3s ease;
    transform:rotate(0deg);/*矢印向上　初期状態*/
    margin-top: 1px;
    margin-left: 5px;
}
#arrow:hover{
    transform:rotate(180deg);/*矢印向下　ホバー時*/
}

#arrow1{
    position: absolute;
    transition: transform 0.3s ease;
    transform:rotate(0deg);/*矢印向上　初期状態*/
    margin-top: -1px;
    margin-left: 5px;
}

#arrow1:hover{
    transform:rotate(180deg);/*矢印向下　ホバー時*/
}
/* 下拉菜单 */
/* 下下拉导航栏 */

.dropdown{
    position: relative;
    width: 170px;
    margin-right: 107px;
}
.dropdown_content
{
    display: none;
    list-style: none;
    font-weight: bolder;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
    width: 158px;
    height: 151px;
    margin-left: 30px;
}

.nav_list .dropdown:hover .dropdown_content{
    display: block;
}
.sub_dropdown{
    margin-top: 22px;
    margin-left: 20px;
}

.sub_dropdown_content{
    display: none;
    width: 198px;
    height: 200px;
    list-style: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
    margin-left: 146px;
    margin-top: -46px;
}

.nav_list .sub_dropdown:hover .sub_dropdown_content{
    display: block;
}

.dropdown_content li a{
    color: black;
    font-weight: bolder;
    width: 160px;
    padding: 12px 16px;
    text-decoration: none;
}

.gc{
    width: 32px;
    height: 32px;
    margin-right: 7px;
    margin-bottom: -10px;
}

.pg{
    width: 32px;
    height: 32px;
    margin-right: 7px;
    margin-bottom: -10px;
}

.mg{
    width: 32px;
    height: 32px;
    margin-left: 7px;
    margin-bottom: -9px;

}

.sub_dropdown_content ul{
    margin-left: 1px;
    width: 190px;
}
.sub_dropdown_content li a{
    position: relative;
    top: 10px;
    color: black;
    /* width: 170px; */
    padding: 12px 16px;
    text-decoration: none;
}

/* 右ナビゲーション部分 */
/* 検索 */
.right_nav{
  margin-bottom: 120px;
}
form{
    list-style-type: none;
}
input {
    margin-top: 154px;
    border-radius: 20px;
    border: solid 1px #cac9c9;
    width: 399px;
    height: 37px;
}

button {
    margin-top: 20px;
    background-color: transparent;
    border: none;
}

button img{ 
    width: 20px;
    position: relative;
    left: -22px;
    top: 6px;
}
:placeholder-shown {
    padding-top: 5px;
    padding-left: 20px;
}
</style>