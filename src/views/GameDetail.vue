<template>
  <div>
  <CartNav/>
  <BreadCrumb/>
  <div class="gameDetail">
    <div class="gameCard">
  <img :src="game.url" alt="" class="gameImg">
  <div class="detailItem">
  <div class="gameInfo">
    <h1>{{ game.name }}</h1>
    <p>カテゴリ:{{ game.category }}</p>
    <p>紹介:{{ game.description }}</p> 
  </div>
</div>
</div>
<div class="cartItem">
    <p>価格:{{ game.price }}</p>
    <p>在庫:{{game.stock}}個</p>
    <div class="cartBtns">
  <button @click="count--" class="cartBtn">-</button>
  <span>{{ count }}</span>
  <button @click ="count++" class="cartBtn">+</button>
</div>
    <router-link to="/cart" class="btn btn-primary"><p>カートに追加</p></router-link>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0,
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
          description: "シリーズの主人公でトレジャーハンターのネイサン・ドレイク（ネイト）は、これまでに財宝を求めて世界各地で冒険を繰り広げてきた。そんなネイトが今回、兄のサムとともに挑むのは、18世紀に存在したとされる幻の国に眠る海賊王の秘宝だ。しかも本作『アンチャーテッド 海賊王と最後の秘宝』は、なんとネイトの最後の冒険になる。",
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
          description: "『バイオハザード4』は従来作の固定視点でのゲームプレイから、プレイヤーの背後からの視点“ビハインドビュー”へと変革を遂げた。アクション、シューティングゲームの新たなスタイルを高い次元で結実させた「4」は「バイオハザード」シリーズ作品のみならず、続く多くの作品に影響を与えた。サバイバルホラー、そしてアクションゲームのマスターピースとして、誕生から多くの年月を重ねた今もその完成度は色褪せることがない。",
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
          description: "再びどん底から這い上がる男、春日一番と人生最期の戦いに挑む男、桐生一馬。二人の主人公が繰り広げる、シリーズ最高のドラマを描いた超大作RPG。戦いは、より戦略性を増した「新ライブコマンドRPGバトル」へと進化。新ジョブの追加や充実のカスタマイズ、育成要素で最強のパーティを作り上げろ！そして舞台は、シリーズ初の海外ステージ「ハワイ」へ。ハワイならではの様々なプレイスポットを遊び尽くせ!",
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
          description: "乾き切った砂漠の世界を救うワルでピュアな悪魔！「ドラゴンボール」原作者である鳥山明が手掛けた魅力溢れる世界を、多彩なメカと広大なフィールドで描いたアクションRPG。魔物も人間も水不足にあえぐ砂漠の世界――サンドランド。正義感の強い保安官ラオが水不足を解消するために協力を求めたのは、この世で最も恐れられている悪魔達だった。ラオは悪魔の王子ベルゼブブとお目付け役の魔物シーフと共に、砂漠のどこかにある「幻の泉」を探す冒険の旅へと出発する!",
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
          description: "大自然で! 大都会で! さらに広がるナワバリバトル!ヒトの姿に変身する不思議なイカたちによる、アクションシューティングがパワーアップして登場!4対4のチームに分かれて、地面を塗った面積で勝敗を決める基本的なルールはそのままに、新たなブキやスペシャルウェポン、バトルアクションが追加。",
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
          description: "あらゆる場所がサーキット。レース、バトル、すべてがデラックス。今までにないキャラクター、コース、マシンが加わり、『マリオカート8』がデラックスに。Wii U『マリオカート8』の追加コンテンツを全て収録し、本作独自の新しいキャラクターやコース、マシンなどの新要素がプラスされ、シリーズ最大ボリュームのマリオカートとして新たに登場。",
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
          description: "『ペーパーマリオRPG』（ペーパーマリオアールピージー、PAPER MARIO RPG、Paper Mario: The Thousand-Year Door）は、インテリジェントシステムズ開発、任天堂発売のアクションRPG。ペーパーマリオシリーズの2作目。タイトルでは繋がっていないものの、NINTENDO64で発売された『マリオストーリー』の実質的な続編[注 1]。続編として、『スーパーペーパーマリオ』が2007年4月19日に発売された（ただし、ジャンルはRPGではなくアクションアドベンチャー）",
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
          description: "果てなき冒険は、大空へ広がる。『ゼルダの伝説　ブレス オブ ザ ワイルド』続編が登場。どこまでも続く広大な「大地」、そしてはるか雲の上の「大空」まで広がった世界で、どこへ行くのも、何をするのもあなた次第です。空を翔けめぐり、不思議な空島を探索するのか？リンクの手にした新たな力で、ハイラルの異変に立ち向かうのか？あなただけの果てなき冒険が、再び始まります。",
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
          description: "すべての希望が失われ、人類の運命が岐路に立つ時、マスターチーフはこれまでに直面したことのないもっとも冷酷な敵に立ち向かう。アーマーに身を包んだ人類最高のヒーローがついに Halo リングの謎に迫る。『Halo』史上もっとも壮大なマスターチーフの物語を携えて、新たなスタートとなるシリーズ最新作で壮大な冒険を体験しよう。Halo の謎に迫る壮大なキャンペーン モード。豊富な種類の武器や乗り物、装備品を組み合わせて無限の組み合わせで戦闘力を高めよう。フェア スタート、マップ内装備配置、4人チーム制など原点に立ち返り、エキサイティングなアリーナ シューターを体験。奥深いプレイヤー カスタマイズ システムで、自分だけのスパルタンになろう。Xbox Series Xでは、最大 120 FPSやロード時間の大幅な短縮などによるスムーズなゲーム プレイを提供。",
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
          description: "",
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
          description: "",
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
          description: "",
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
          description: "",
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
          description: "",
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
          description: "",
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
          description: "",
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

<style scoped>
.breadcrumb{
  display: flex;
  align-items: center;
  margin-left: 84px;
  font-size: 14px;
}
.gameDetail{
  display: flex;
  position: relative;
  width: 1222px;
  gap: 20px;
  margin: 20px;
  left: 58px;
  top: 12px;
}
.gameCard{
  display: flex;
  gap: 20px;
  border-radius: 20px;
  width: 873px;
  height: 525px;
  background-color: #e0e0e081;
}
.gameImg{
  display: flex;
  margin-top: 34px;
  margin-left: 63px;
  width: 336px;
  height: 450px;
}

.cartItem{
  display: flex;
  flex-direction: column;
}
.cartBtns{
  display: flex;
  gap: 9px
}
.cartBtn{
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 29%;
  cursor: pointer;
}
span{
  position: relative;
  top: 22px;
}

.gameInfo{
  display: flex;
  flex-direction: column;
}
.gameInfo h1{
  font-weight: bold;
  font-size: 24px;
  right: 7px;
  top: 16px;
}
.gameInfo p{
  position: relative;
  top: 8px;
  margin-top: 11px;
  margin-left: 18px;
}
.gameInfo p:nth-child(3){
  margin-left: 16px;
  width: 428px;
}
</style>