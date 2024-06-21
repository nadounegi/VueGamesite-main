<template>
  <div>
    <NavigationTest @update:dropdownActive="updateDropdownActive"/>
    <Lunbo :menuActive="menuActive"/>
    <!-- 其他内容 -->
  </div>
</template>

<script>
import NavigationTest from '@/components/NavigationTest.vue';
import Lunbo from '@/components/Lunbo.vue';

export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    updateDropdownActive(value) {
      this.menuActive = value;
    }
  },
  components: {
    NavigationTest,
    Lunbo,
  },
};
</script>

<style scoped>
/* Scoped styles for Home.vue */
/* * {
  margin: 0;
  padding: 0;
}

.right_nav {
  margin-bottom: 198px;
}

.breadcrumb {
  display: flex;
  position: relative;
  align-items: center;
  font-size: 14px;
  left: 92px;
  top: 54px;
}

main {
  position: relative;
  top: 52px;
} */

/* レスポンシブ */
/* @media(max-width: 768px) {
  header {
    width: 100%;
  }
  .breadcrumb {
    left: 20px;
    top: 20px;
    font-size: 12px;
  }
  .right_nav {
    margin-bottom: 100px;
  }
}

@media (max-width: 480px) {
  .breadcrumb {
    left: 10px;
    top: 10px;
    font-size: 10px;
  }
  .right_nav {
    margin-bottom: 50px;
  }
} */
</style>
