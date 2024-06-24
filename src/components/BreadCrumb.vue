<template>
  <nav class="breadcrumb">
    <router-link to="/" class="breadcrumb__link">ホーム</router-link>
    <span 
      v-for="(crumb, index) in breadcrumbs" 
      :key="index" 
      class="breadcrumb__item"
    >
      <span 
        v-if="index > 0" 
        class="breadcrumb__separator"
      >
        &gt;
      </span>
      <router-link 
        class="breadcrumb__link" 
        :to="crumb.path"
      >
        {{ crumb.meta.breadcrumb }}
      </router-link>
    </span>
  </nav>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$route.matched.map((route) => ({
        name: route.name,
        path: route.path,
        meta: route.meta,
      }));
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.breadcrumb__link {
  text-decoration: none;
  color: #333;
}

.breadcrumb__item {
  margin: 0 5px;
  position: relative;
  top: 0px;
  font-size: 15px;
}

.breadcrumb__separator {
  margin: 0 5px;
  font-size: 15px;
  color: #333;
}
</style>
