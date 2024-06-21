<template>
  <div>
    <NavigationTest  @update:dropdownActive="updateDropdownActive"/>
    <Lunbo :menuActive="menuActive"/>
    <!-- 其他内容 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuActive: false,
    };
  },
  methods:{
    updateDropdownActive(value){
      this.menuActive = value;
    }
  
  }
};
</script>
  
  <style >

  </style>
  