<template>
  <div>
    <NavigationTest @update:dropdownActive="updateDropdownActive"/>
    <Lunbo :menuActive="menuActive"/>
    <!-- 其他内容 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {// 用于接收子组件传递的值
    updateDropdownActive(value) {
      this.menuActive = value;
    }
  },
};
</script>

<style scoped>
.hd {
    width: 100vw;
    position: relative;
    top: 69px;
    background-color: white;
    z-index: 1000;
}

.bottom_header img{
    position: relative;
    width: 97px;
    height: 129px;
    bottom: -1px;
}
</style>
