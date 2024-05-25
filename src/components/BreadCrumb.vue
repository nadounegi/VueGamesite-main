<template>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span v-for="(crumb, index) in breadcrumbs" :key="index">
        <span v-if="index < breadcrumbs.length - 1">></span>
        <router-link :to="crumb.path">{{ crumb.meta.breadcrumb }}</router-link>
      </span>
    </nav>
  </template>
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        // let pathArray = this.$route.path.split('/');//このコードは、Vue.jsアプリケーションで現在のルートパスを取得し、それをスラッシュ('/')で分割して配列に格納しています。
        let pathArray = this.$route.matched;
        return pathArray.map((route) => {
          return {
            name: route.name,
            path: route.path,
            meta: route.meta
          };
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .breadcrumb > * {
    text-decoration: none;
    color: #333;
  }
  
  .breadcrumb span {
    margin: 0 5px;
  }
  </style>
  