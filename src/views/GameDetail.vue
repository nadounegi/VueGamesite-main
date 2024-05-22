<template>
  <div>
  <CartNav/>
  <img :src="game.url" alt="">
  <div class="gameInfo">
    <h1>{{ game.name }}</h1>
    <p>価格:{{ game.price }}</p>
    <p>在庫:{{game.stock}}個</p>
  </div>
    <router-link to="/cart" class="btn btn-primary">カートに追加</router-link>
    <router-link to="/Mall"><p>戻る</p></router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // ゲームのデータを入れる
      game: {}
    }
  },
  created(){   // ページが読み込まれたタイミングで実行される
    const gameId = this.$route.params.id;
    this.fetchGameDetail(gameId);
  },
  methods:{
    fetchGameDetail(id){
      // ここに全ゲームのデータを入れる
      const allGames = [
        {
          id:1,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "UNCHARTED 4",
          url: this.$imgUrl.Uncarted4,
          price: 6070,
          stock: 10,
        },
        {
          id: 2,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS4",
          name: "バイオハザード 4",
          url: this.$imgUrl.Biohazard4,
          price: 1266,
          stock: 5,
        },
        {
          id: 3,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "龍が如く8",
          url: this.$imgUrl.RyuGaGotoku8,
          price: 6120,
          stock: 3,
        },
        {
          id: 4,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "SandLand",
          url: this.$imgUrl.SandLand,
          price: 7038,
          stock: 2,
        },
        {
          id: 5,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "スプラトゥーン3",
          url: this.$imgUrl.Splatoon3,
          price: 5618,
          stock: 7,
        },
        {
          id: 6,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "マリオカート8",
          url: this.$imgUrl.Mario8,
          price: 5307,
          stock: 4,
        },
        {
          id: 7,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ペーパーマリオRPG",
          url: this.$imgUrl.PaperMario,
          price: 5382,
          stock: 3,
        },
        {
          id: 8,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ゼルダの伝説",
          url: this.$imgUrl.Zelda,
          price: 6120,
          stock: 3,
        },
        {
          id: 9,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Halo Infinite",
          url: this.$imgUrl.HaloInfinite,
          price: 6209,
          stock: 6,
        },
        {
          id: 10,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Forza Motorsport",
          url: this.$imgUrl.ForzaMotorsport,
          price: 4800,
          stock: 4,
        },
        {
          id: 11,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox One",
          name: "Minecraft Legends",
          url: this.$imgUrl.MinecraftLegends,
          price: 1586,
          stock: 3,
        },
        {
          id: 12,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Dead Space",
          url: this.$imgUrl.DeadSpace,
          price: 7775,
          stock: 2,
        },
        {
          id: 13,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "ファイナルファンタジーXIV",
          url: this.$imgUrl.FF14,
          price: 4200,
          stock: 5,
        },
        {
          id: 14,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "リトルナイトメア",
          url: this.$imgUrl.LittleNightmare,
          price: 2420,
          stock: 3,
        },
        {
          id: 15,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "Tales of ARISE",
          url: this.$imgUrl.TalesofARISE,
          price: 4400,
          stock: 2,
        },
        {
          id: 16,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "みんな大好き塊魂アンコール",
          url: this.$imgUrl.Katamari,
          price: 3960,
          stock: 1,
        },
      ];
      this.game = allGames.find(game => game.id == id);
    }
  }
  }

</script>

<style>

</style>