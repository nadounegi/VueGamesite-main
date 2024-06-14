<template>
    <div>
        <BreadCrumb/>
        <CateTitle :title="gameCategory" />
        <div class="CartList">
      <CartItem v-for="item in CartItems" :key="item.id" :item="item" />
    </div>
    </div>
</template>

<script>

// import HaloInfinite from '@/assets/images/HaloInfinite.png';
// import ForzaMotorsport from '@/assets/images/ForzaMotorsport.png';
// import MinecraftLegends from '@/assets/images/MinecraftLegends.png';
// import DeadSpace from '@/assets/images/DeadSpace.png';

export default {
  data() {
    return {
      gameCategory: "Xbox", // 确保定义了gameCategory
      CartItems: [
      {
          id: 9,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Halo Infinite",
          url: this.$imgUrl.HALO1,
          price: 6209,
          stock: 6,
        },
        {
          id: 10,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Forza Motorsport",
          url: this.$imgUrl.FORZA1,
          price: 4800,
          stock: 4,
        },
        {
          id: 11,
          gameCategory: "Xbox",
          category: "Xbox One",
          name: "Minecraft Legends",
          url: this.$imgUrl.MINECRAFT1,
          price: 1586,
          stock: 3,
        },
        {
          id: 12,
          gameCategory: "Xbox",
          category: "Xbox Series X",
          name: "Dead Space",
          url: this.$imgUrl.DEADSPACE1,
          price: 7775,
          stock: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>

.breadcrumb{
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}
.CartList {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  position: relative;
  left: 111px;
  bottom: 0px;
}
.cateTitle{
  position: relative;
  left: 123px;
  top: 0px;
  margin-bottom: 20px;
}

.cateTitle h2 {
  position: relative;
  bottom: 9px;
  color: black;
  left: 4px;
}
.cateTitle h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}
</style>
