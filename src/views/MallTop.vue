<template>
  <div>
      <BreadCrumb/>
    <div v-for="category in uniqueCategories" :key="category" class="CartListItem">
      <CateTitle :title="category" :to="getCategoryLink(category)" :showLink="true"/>
      <div class="CartList">
        <CartItem
          v-for="item in filteredItems(category)"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cartList: [
        {
          id: 1,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS4",
          name: "UNCHARTED 4",
          url: "src/assets/images/Uncharted4.png",
          price: 6070,
          stock: 10,
        },
        {
          id: 2,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS4",
          name: "バイオハザード 4",
          url: "src/assets/images/バイオハザード４.png",
          price: 1266,
          stock: 5,
        },
        {
          id: 3,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "龍が如く8",
          url: "src/assets/images/龍が如く８.png",
          price: 6120,
          stock: 3,
        },
        {
          id: 4,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "SandLand",
          url: "src/assets/images/SandLand.png",
          price: 7038,
          stock: 2,
        },
        {
          id: 5,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "スプラトゥーン3",
          url: "src/assets/images/スプラトゥーン３.png",
          price: 5618,
          stock: 7,
        },
        {
          id: 6,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "マリオカート8",
          url: "src/assets/images/マリオカート8.png",
          price: 5307,
          stock: 4,
        },
        {
          id: 7,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ペーパーマリオRPG",
          url: "src/assets/images/ペーパーマリオRPG.png",
          price: 5382,
          stock: 3,
        },
        {
          id: 8,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ゼルダの伝説",
          url: "src/assets/images/ゼルダの伝説.png",
          price: 6120,
          stock: 3,
        },
        {
          id: 9,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Halo Infinite",
          url: "src/assets/images/HaloInfinite.png",
          price: 6209,
          stock: 6,
        },
        {
          id: 10,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Forza Motorsport",
          url: "src/assets/images/ForzaMotorsport.png",
          price: 4800,
          stock: 4,
        },
        {
          id: 11,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox One",
          name: "Minecraft Legends",
          url: "src/assets/images/MINECRAFT1.png",
          price: 1586,
          stock: 3,
        },
        {
          id: 12,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Dead Space",
          url: "src/assets/images/DEADSPACE1.png",
          price: 7775,
          stock: 2,
        },
        {
          id: 13,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "ファイナルファンタジーXIV",
          url: "src/assets/images/FINALFANTASY1.png",
          price: 4200,
          stock: 5,
        },
        {
          id: 14,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "リトルナイトメア",
          url: "src/assets/images/Little1.png",
          price: 2420,
          stock: 3,
        },
        {
          id: 15,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "Tales of ARISE",
          url: "src/assets/images/TALES1.png",
          price: 4400,
          stock: 2,
        },
        {
          id: 16,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "みんな大好き塊魂アンコール",
          url: "src/assets/images/KATAMARI1.png",
          price: 3960,
          stock: 1,
        },
      ],
      uniqueCategories: ["PS4・PS5", "Nintendo Switch", "Xbox", "PC"],
    };
  },
  methods: {
    filteredItems(category) {
      return this.cartList.filter(item => item.gameCategory === category);
    },
    getCategoryLink(category) {
      const item = this.cartList.find(item => item.gameCategory === category);
      return item ? item.href : '#';
    },
  },
};
</script>

<style>
.CartList {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: -46px;
  left: 10px;
  bottom: 0px;
  max-height: 1600px; /* 固定高度，调整为所需高度 */
  /* overflow-y: auto; */
}
.CartListItem {
  position: relative;
  margin-right: 107px;
  left: 31px;
  top: 26px;
}
.cateTitle {
  position: relative;
  left: 37px;
  top: 34px;
  margin-bottom: 20px;
}


.cateTitle h2 {
  color: black;
}

.cateTitle h4 {
  position: relative;
  bottom: 0px;
  left: 17px;
  cursor: pointer;
}

.breadcrumb {
  margin-left: 120px;
  font-size: 14px;
  top:20px;
  position: relative;
}

/* Fixed CartNav */
.CartNav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
