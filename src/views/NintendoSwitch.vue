<template>
  <div>
    <CateTitle title="NS" link="/Mall/NS"/>
        <div class="CartList">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>