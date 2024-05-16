<template>
    <div>
      <Navigation />
      <main>
        <Lunbo></Lunbo>
      </main>
    </div>
  </template>
  
  <script>
  import Lunbo from '@/components/Lunbo.vue';
  export default {
    comments: {
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
  