<template>
  <div id="app">
<!-- <Navigation/> -->
<main>
  <!-- <Lunbo/> -->
    <router-view />
  </main>
  </div>
</template>

<script>
// Home.vue には、Navigation.vue と Lunbo.vue がインポートされていますので、ここはいらない
// import Navigation from '@/views/Navigation.vue'
// import Lunbo from '@/components/Lunbo.vue'
export default {
 components: {
  //  Navigation,
  //  Lunbo
 }

};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}
header {
  position: relative;
  bottom: 263px;
  width: 179vh;
}

</style>
