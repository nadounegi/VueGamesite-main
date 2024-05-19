<template>
  <div>
    <CateTitle :title="title"/>
        <div class="CartList">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return
  }
}
</script>

<style>

</style>