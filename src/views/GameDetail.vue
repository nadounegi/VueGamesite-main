<template>
  <div>
  <div class="cartDetail">
  <BreadCrumb/>
  <div class="gameDetail">
    <div class="gameCard">
      <imgLunbo :images="game.images"/>
  <div class="detailItem">
  <div class="gameInfo" >
    <h1>{{ game.name }}</h1>
    <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included2">税込</span></p>
    <p>カテゴリ:{{ game.category }}</p>
    <hr id="hr1">
    <p class="syokai">紹介:{{ game.description }}</p> 
  </div>
</div>
</div>
<div class="cartItem">
    <!-- <p>価格:{{ game.price }}</p> -->
    <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included">税込</span></p>
    <p id="stockAmount">残り{{game.stock}}個<span id="stock">ご注文は早めに</span></p>
    <hr id="hr2">
    <div class="cartBtns">
  <button @click="decreaseCount" :disabled="count <= 0" class="cartBtn">-</button>
  <span>{{ count }}</span>
  <button @click ="increaseCount" :disabled="count >= game.stock" class="cartBtn">+</button>
</div>
<button class="btn-primary" @click="addToCart">カートに追加</button>
  </div>
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
    
    addToCart(){
      this.$store.dispatch('addToCart',{// カートに追加
        id: this.game.id,
        url:this.game.url,
        name:this.game.name,
        price:this.game.price,
        quantity:this.count
      });   
    },
    increaseCount(){
      if(this.count < this.game.stock){
        this.count++;
      }
    },
    decreaseCount(){
      if(this.count > 0){
        this.count--;
      }
    },
    fetchGameDetail(id){
      // ここに全ゲームのデータを入れる
      const allGames = [
        {
          id:1,
          gameCategory: "PS4・PS5",
          category: "PS4",
          name: "UNCHARTED 4",
          description: "シリーズの主人公でトレジャーハンターのネイサン・ドレイク（ネイト）は、これまでに財宝を求めて世界各地で冒険を繰り広げてきた。そんなネイトが今回、兄のサムとともに挑むのは、18世紀に存在したとされる幻の国に眠る海賊王の秘宝だ。しかも本作『アンチャーテッド 海賊王と最後の秘宝』は、なんとネイトの最後の冒険になる。",
          url: this.$imgUrl.UNCHARTED1,
          price: 6070,
          stock: 10,
          images:[
            {url:this.$imgUrl.UNCHARTED1},
            {url:this.$imgUrl.UNCHARTED2},
            {url:this.$imgUrl.UNCHARTED3},
            {url:this.$imgUrl.UNCHARTED4}
          ]
        },
        {
          id: 2,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS4",
          name: "バイオハザード 4",
          description: "『バイオハザード4』は従来作の固定視点でのゲームプレイから、プレイヤーの背後からの視点“ビハインドビュー”へと変革を遂げた。アクション、シューティングゲームの新たなスタイルを高い次元で結実させた「4」は「バイオハザード」シリーズ作品のみならず、続く多くの作品に影響を与えた。サバイバルホラー、そしてアクションゲームのマスターピースとして、誕生から多くの年月を重ねた今もその完成度は色褪せることがない。",
          url: this.$imgUrl.BIOHAZARD1,
          price: 1266,
          stock: 5,
          images:[
            {url:this.$imgUrl.BIOHAZARD1},
            {url:this.$imgUrl.BIOHAZARD2},
            {url:this.$imgUrl.BIOHAZARD3},
            {url:this.$imgUrl.BIOHAZARD4}
          ]
        },
        {
          id: 3,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "龍が如く8",
          description: "再びどん底から這い上がる男、春日一番と人生最期の戦いに挑む男、桐生一馬。二人の主人公が繰り広げる、シリーズ最高のドラマを描いた超大作RPG。戦いは、より戦略性を増した「新ライブコマンドRPGバトル」へと進化。新ジョブの追加や充実のカスタマイズ、育成要素で最強のパーティを作り上げろ！そして舞台は、シリーズ初の海外ステージ「ハワイ」へ。ハワイならではの様々なプレイスポットを遊び尽くせ!",
          url: this.$imgUrl.RYUGAGOTOKU1,
          price: 6120,
          stock: 3,
          images:[
            {url:this.$imgUrl.RYUGAGOTOKU1},
            {url:this.$imgUrl.RYUGAGOTOKU2},
            {url:this.$imgUrl.RYUGAGOTOKU3},
            {url:this.$imgUrl.RYUGAGOTOKU4}
          ]
        },
        {
          id: 4,
          gameCategory: "PS4・PS5",
          href: "/Mall/PS4PS5",
          category: "PS5",
          name: "SandLand",
          description: "乾き切った砂漠の世界を救うワルでピュアな悪魔！「ドラゴンボール」原作者である鳥山明が手掛けた魅力溢れる世界を、多彩なメカと広大なフィールドで描いたアクションRPG。魔物も人間も水不足にあえぐ砂漠の世界――サンドランド。正義感の強い保安官ラオが水不足を解消するために協力を求めたのは、この世で最も恐れられている悪魔達だった。ラオは悪魔の王子ベルゼブブとお目付け役の魔物シーフと共に、砂漠のどこかにある「幻の泉」を探す冒険の旅へと出発する!",
          url: this.$imgUrl.SandLand1,
          price: 7038,
          stock: 2,
          images:[
            {url:this.$imgUrl.SandLand1},
            {url:this.$imgUrl.SandLand2},
            {url:this.$imgUrl.SandLand3},
            {url:this.$imgUrl.SandLand4}
          ]
        },
        {
          id: 5,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "スプラトゥーン3",
          description: "大自然で! 大都会で! さらに広がるナワバリバトル!ヒトの姿に変身する不思議なイカたちによる、アクションシューティングがパワーアップして登場!4対4のチームに分かれて、地面を塗った面積で勝敗を決める基本的なルールはそのままに、新たなブキやスペシャルウェポン、バトルアクションが追加。",
          url: this.$imgUrl.SPLATOON1,
          price: 5618,
          stock: 7,
          images:[
            {url:this.$imgUrl.SPLATOON1},
            {url:this.$imgUrl.SPLATOON2},
            {url:this.$imgUrl.SPLATOON3},
            {url:this.$imgUrl.SPLATOON4}
          ]
        },
        {
          id: 6,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "マリオカート8",
          description: "あらゆる場所がサーキット。レース、バトル、すべてがデラックス。今までにないキャラクター、コース、マシンが加わり、『マリオカート8』がデラックスに。Wii U『マリオカート8』の追加コンテンツを全て収録し、本作独自の新しいキャラクターやコース、マシンなどの新要素がプラスされ、シリーズ最大ボリュームのマリオカートとして新たに登場。",
          url: this.$imgUrl.MARIOKART1,
          price: 5307,
          stock: 4,
          images:[
            {url:this.$imgUrl.MARIOKART1},
            {url:this.$imgUrl.MARIOKART2},
            {url:this.$imgUrl.MARIOKART3},
            {url:this.$imgUrl.MARIOKART4}
          ]
        },
        {
          id: 7,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ペーパーマリオRPG",
          description: "『ペーパーマリオRPG』（ペーパーマリオアールピージー、PAPER MARIO RPG、Paper Mario: The Thousand-Year Door）は、インテリジェントシステムズ開発、任天堂発売のアクションRPG。ペーパーマリオシリーズの2作目。タイトルでは繋がっていないものの、NINTENDO64で発売された『マリオストーリー』の実質的な続編[注 1]。続編として、『スーパーペーパーマリオ』が2007年4月19日に発売された（ただし、ジャンルはRPGではなくアクションアドベンチャー）",
          url: this.$imgUrl.PAPER1,
          price: 5382,
          stock: 3,
          images:[
            {url:this.$imgUrl.PAPER1},
            {url:this.$imgUrl.PAPER2},
            {url:this.$imgUrl.PAPER3},
            {url:this.$imgUrl.PAPER4}
          ]
        },
        {
          id: 8,
          gameCategory: "Nintendo Switch",
          href: "/Mall/NintendoSwitch",
          category: "NS",
          name: "ゼルダの伝説",
          description: "果てなき冒険は、大空へ広がる。『ゼルダの伝説　ブレス オブ ザ ワイルド』続編が登場。どこまでも続く広大な「大地」、そしてはるか雲の上の「大空」まで広がった世界で、どこへ行くのも、何をするのもあなた次第です。空を翔けめぐり、不思議な空島を探索するのか？リンクの手にした新たな力で、ハイラルの異変に立ち向かうのか？あなただけの果てなき冒険が、再び始まります。",
          url: this.$imgUrl.ZELDA1,
          price: 6120,
          stock: 3,
          images:[
            {url:this.$imgUrl.ZELDA1},
            {url:this.$imgUrl.ZELDA2},
            {url:this.$imgUrl.ZELDA3},
            {url:this.$imgUrl.ZELDA4}
          ]
        },
        {
          id: 9,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Halo Infinite",
          description: "すべての希望が失われ、人類の運命が岐路に立つ時、マスターチーフはこれまでに直面したことのないもっとも冷酷な敵に立ち向かう。アーマーに身を包んだ人類最高のヒーローがついに Halo リングの謎に迫る。『Halo』史上もっとも壮大なマスターチーフの物語を携えて、新たなスタートとなるシリーズ最新作で壮大な冒険を体験しよう。Halo の謎に迫る壮大なキャンペーン モード。豊富な種類の武器や乗り物、装備品を組み合わせて無限の組み合わせで戦闘力を高めよう。フェア スタート、マップ内装備配置、4人チーム制など原点に立ち返り、エキサイティングなアリーナ シューターを体験。奥深いプレイヤー カスタマイズ システムで、自分だけのスパルタンになろう。Xbox Series Xでは、最大 120 FPSやロード時間の大幅な短縮などによるスムーズなゲーム プレイを提供。",
          url: this.$imgUrl.HALO1,
          price: 6209,
          stock: 6,
          images:[
            {url:this.$imgUrl.HALO1},
            {url:this.$imgUrl.HALO2},
            {url:this.$imgUrl.HALO3},
            {url:this.$imgUrl.HALO4}
          ]
        },
        {
          id: 10,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Forza Motorsport",
          description: "新しいシングル プレイ モードでライバルに差をつけよう。マルチ プレイヤーでフレンドとレースをしよう。最先端の AI と高度な物理エンジンで、世界的に有名なコースと実在する 500 台以上のクルマをリアルに再現。",
          url: this.$imgUrl.FORZA1,
          price: 4800,
          stock: 4,
          images:[
            {url:this.$imgUrl.FORZA1},
            {url:this.$imgUrl.FORZA2},
            {url:this.$imgUrl.FORZA3},
            {url:this.$imgUrl.FORZA4}
          ]
        },
        {
          id: 11,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox One",
          name: "Minecraft Legends",
          description: "ピグリンたちによるネザーの侵食はオーバーワールド全体に広がりつつあり、触れたもの全てを焼き尽くしていくでしょう。この平穏な大地のヒーローになる準備はいいですか？綿密な戦略を立て、ピグリンたちとの壮大な戦いに挑みましょう。でも気を付けてください… 彼らは必ず反撃してきます。日中はピグリンたちの基地に攻め込み、日が沈んだら仲間たちと守りを固めましょう。宝物と危険が満ち溢れる緑豊かバイオームを旅して新しい仲間と出会い、良く知ったモブたちと再会しましょう。そして仲間たちと共に、世界を救いましょう。",
          url: this.$imgUrl.MINECRAFT1,
          price: 1586,
          stock: 3,
          images:[
            {url:this.$imgUrl.MINECRAFT1},
            {url:this.$imgUrl.MINECRAFT2},
            {url:this.$imgUrl.MINECRAFT3},
            {url:this.$imgUrl.MINECRAFT4}
          ]
        },
        {
          id: 12,
          gameCategory: "Xbox",
          href: "/Mall/Xbox",
          category: "Xbox Series X",
          name: "Dead Space",
          description: "SFサバイバルホラーの名作が復活します。オリジナルのスリリングな世界観を忠実に再現しながら、ビジュアル、オーディオ、ゲームプレイの改善を含め、さらに没入感のある体験を提供するために完全に再構築されました。",
          url: this.$imgUrl.DEADSPACE1,
          price: 7775,
          stock: 2,
          images:[
            {url:this.$imgUrl.DEADSPACE1},
            {url:this.$imgUrl.DEADSPACE2},
            {url:this.$imgUrl.DEADSPACE3},
            {url:this.$imgUrl.DEADSPACE4}
          ] 
        },
        {
          id: 13,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "ファイナルファンタジーXIV",
          description: "ファイナルファンタジーXIVは、壮大な“エオルゼア”という世界を舞台に、ネットワークを通じて、世界中のプレイヤーと共に冒険できる、オンラインゲームです。冒険は戦いだけでなく、アイテムの製作や、チョコボの育成など様々あり、その遊び方は冒険者であるあなた次第!お馴染みの召喚獣やモーグリ、飛空挺…そして仲間たちが待つ、新たなFFの世界に旅立ちましょう!",
          url: this.$imgUrl.FINALFANTASY1,
          price: 4200,
          stock: 5,
          images:[
            {url:this.$imgUrl.FINALFANTASY1},
            {url:this.$imgUrl.FINALFANTASY2},
            {url:this.$imgUrl.FINALFANTASY3},
            {url:this.$imgUrl.FINALFANTASY4}
          ]
        },
        {
          id: 14,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "リトルナイトメア",
          description: "子供のころに感じた奇妙な恐怖や不安を覚えていますか？食欲の尽きることがない魔物が巣食う謎の船舶「ザ・モウ」の中、恐ろしくも懐かしい感覚を思い出したあなたの手で、囚われた幼き少女「シックス」を無事に脱出させましょう。",
          url: this.$imgUrl.Little1,
          price: 2420,
          stock: 3,
          images:[
            {url:this.$imgUrl.Little1},
            {url:this.$imgUrl.Little2},
            {url:this.$imgUrl.Little3},
            {url:this.$imgUrl.Little4}
        ]
        },
        {
          id: 15,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "Tales of ARISE",
          description: "３００年の支配。謎の仮面。失われた痛みと記憶。強大な炎の剣のただひとりの使い手となり、触れ得ざる少女や仲間たちと共に圧制者に立ち向かえ。進化したグラフィックが描き出す表情豊かなキャラクターたちの織りなす解放の戦いの物語。",
          url: this.$imgUrl.TALES1,
          price: 4400,
          stock: 2,
          images:[
            {url:this.$imgUrl.TALES1},
            {url:this.$imgUrl.TALES2},
            {url:this.$imgUrl.TALES3},
            {url:this.$imgUrl.TALES4}
          ]
        },
        {
          id: 16,
          gameCategory: "PC",
          href: "/Mall/PCGame",
          category: "PC",
          name: "みんな大好き塊魂アンコール",
          description: "ふとしたことで宇宙の星々をウッカリ破壊しつくしてしまった大コスモの王様。息子である王子を地球に向かわせ、大きい塊をつくることを命じます。王子は地球上のあらゆるモノを巻き込んで、どんどん塊を大きくしていきました。そうしてつくられた塊たちはキラキラと宇宙に浮かび、失われた星空を甦らせました。星空を復活させると、次第に世界のあちらこちらで王様のファンが増えていきました。ファンからの活躍を願う声に応えたい王様は、みんなの夢を叶えるべく、今日も王子は塊を転がします。そんなゲームです。",
          url: this.$imgUrl.KATAMARI1,
          price: 3960,
          stock: 1,
          images:[
            {url:this.$imgUrl.KATAMARI1},
            {url:this.$imgUrl.KATAMARI2},
            {url:this.$imgUrl.KATAMARI3},
            {url:this.$imgUrl.KATAMARI4}
          ]
        
        },
      ];
      this.game = allGames.find(game => game.id == id);
    }
  }
  }

</script>

<style scoped>
.cartDetail{
  position: relative;
  bottom: 12px;
}
.breadcrumb{
  margin-left: 120px;
  font-size: 14px;
  top: 191px;
  left: 268px;
  position: fixed;
}

.gameDetail{
  display: flex;
  position: relative;
  width: 1222px;
  gap: 20px;
  margin: 20px;
  left: 96px;
}

#hr1{
  position: relative;
  top: 9px;
  left: 17px;
  width: 376px;
  border-color: #c5d9dae3;
}

#hr2{
  position: relative;
  top: 18px;
  left: 9px;
  text-shadow: #555 2px 2px 2px;
  width: 180px;
  border-color: #c5d9dae3;
}
.gameCard{
  display: flex;
  position: relative;
  left: 76px;
  border-radius: 20px;
  width: 873px;
  height: 556px;
  background-color: #e0e0e081;
}
.gameImg{
  display: flex;
  margin-top: 53px;
  margin-left: 49px;
  width: 286px;
  height: 412px;
}

.cartItem{
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  margin-left: 71px;
  background-color: #e0e0e081;
  width: 200px;
  height: 278px;
}
.cartItem span:nth-child(1){
  font-size: 35px;
  position: relative;
  top: 0px;
}

#stockAmount{
  color: #9f0707;
  margin-top: 2px;
}

#stock{
  margin-left: 14px;
  font-size: 15px;
}

.cartBtns{
  display: flex;
  margin: auto;
  gap: 9px;
  position: relative;
  bottom: 56px;
}
.cartBtn{
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 29%;
  cursor: pointer;
}

.btn-primary{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-left: 13px;
  height: 41px;
  width: 115px;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left ,rgb(130, 130, 255),rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
  position: absolute;
  bottom: 10px;
  text-decoration: none;
}
.btn-primary:hover{
  animation:gradient-animation 3s infinite alternate;
}
@keyframes gradient-animation{
  0%{
    background-image: linear-gradient(to right,rgb(130, 130, 255),rgb(237, 46, 237));
  }
  100%{
    background-image:linear-gradient(to right,rgb(51, 223, 238),rgb(36, 116, 220));
  }
}

span{
  position: relative;
  top: 22px;
}

.gameInfo{
  display: flex;
  position: relative;
  margin-top: 30px;
  flex-direction: column;
  right: 76px;
}
.gameInfo h1{
  position: relative;
  left: 2px;
  font-weight: bold;
  font-size: 22px;
}
/* .gameInfo p{
  position: relative;
  top: 8px;
  width: 384px;
  margin-top: 11px;
  margin-left: 18px;
} */

.gameInfo p:nth-child(2){
  position: relative;
  font-size: 25px;
  top: -11px;
}

.gameInfo p:nth-child(3){
  margin-left: 19px;
  width: 428px;
}
.syokai{
  width: 428px;
}
.tax-included{
  font-size: 12px;
  color: #555;
  margin-left: 5px;
  position: relative;
  top: 2px;
}

.tax-included2{
  font-size: 12px;
  margin-left: 8px;
  color: #555;
  position: relative;
  top: 25px;
}
</style>