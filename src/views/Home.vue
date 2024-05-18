<template>
  <div>
    <Navigation />
    <Lunbo />
    <!-- 其他内容 -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Lunbo from '@/components/Lunbo.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    Lunbo,
  },
};
</script>
  
  <style scoped>
*{
    margin: 0;
    padding: 0;
}

header {
    position: relative;
    top: 50px;
    right: 8px;
    width: 179vh;
}
.right_nav{
  margin-bottom: 198px;
}

main{
  position: relative;
  top: 52px;
}
  </style>
  