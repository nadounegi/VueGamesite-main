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

<style>

</style>
