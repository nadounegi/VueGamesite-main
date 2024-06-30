<!-- <template>
  <div class="cartDetail">
    <div class="gameDetail">
      <div class="gameCard">
        <imgLunbo :images="game.images"/>
        <div class="detailItem">
          <div class="gameInfo">
            <h1>{{ game.name }}</h1>
            <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included2">税込</span></p>
            <p>カテゴリ:{{ game.category }}</p>
            <hr id="hr1">
            <p class="syokai">紹介:{{ game.description }}</p>
          </div>
        </div>
      </div>
      <div class="cartItem">
        <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included">税込</span></p>
        <p id="stockAmount">残り{{game.stock}}個<span id="stock">ご注文は早めに</span></p>
        <hr id="hr2">
        <div class="cartBtns">
          <button @click="decreaseCount" :disabled="count <= 0" class="cartBtn">-</button>
          <span>{{ count }}</span>
          <button @click="increaseCount" :disabled="count >= game.stock" class="cartBtn">+</button>
        </div>
        <button class="btn-primary" @click="addToCart">カートに追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      game: {}
    };
  },
  created() {
    const gameId = this.$route.params.id;
    if (this.$store.getters['allGames/allGames'].length === 0) {
      this.$store.dispatch('allGames/getallGames').then(() => {
        this.fetchGameDetail(gameId);
      });
    } else {
      this.fetchGameDetail(gameId);
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.game.id,
        url: this.game.url,
        name: this.game.name,
        price: this.game.price,
        quantity: this.count
      });
    },
    increaseCount() {
      if (this.count < this.game.stock) {
        this.count++;
      }
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
    fetchGameDetail(id) {
      const allGames = this.$store.getters['allGames/allGames'];
      this.game = allGames.find(game => game.id == id);
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
    }
  }
};
</script> -->
<template>
  <div class="cartDetail">
    <div class="gameDetail">
      <div class="gameCard">
        <imgLunbo :images="game.images"/>
        <div class="detailItem">
          <div class="gameInfo">
            <h1>{{ game.name }}</h1>
            <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included2">税込</span></p>
            <p>カテゴリ:{{ game.category }}</p>
            <hr id="hr1">
            <p class="syokai">紹介:{{ game.description }}</p>
          </div>
        </div>
      </div>
      <div class="cartItem">
        <p><span v-html="formattedPrice(game.price)"></span><span class="tax-included">税込</span></p>
        <p id="stockAmount">残り{{game.stock}}個<span id="stock">ご注文は早めに</span></p>
        <hr id="hr2">
        <div class="cartBtns">
          <button @click="decreaseCount" :disabled="count <= 0" class="cartBtn">-</button>
          <span>{{ count }}</span>
          <button @click="increaseCount" :disabled="count >= game.stock" class="cartBtn">+</button>
        </div>
        <button class="btn-primary" @click="addToCart">カートに追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      game: {}
    };
  },
  created() {
    const gameId = this.$route.params.id;
    if (this.$store.getters['allGames/allGames'].length === 0) {
      console.log();
      this.$store.dispatch('allGames/getallGames').then(() => {
        this.fetchGameDetail(gameId);
      });
    } else {
      this.fetchGameDetail(gameId);
    }
  },
  methods: {
    addToCart() {
      if (this.count > 0) {
        const product = {
          id: this.game.id,
          url: this.game.url,
          name: this.game.name,
          price: this.game.price,
          quantity: this.count
        };
        console.log('Adding to cart:', product);
        this.$store.dispatch('addToCart', product);
      }
    },
    increaseCount() {
      if (this.count < this.game.stock) {
        this.count++;
      }
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
    fetchGameDetail(id) {
      const allGames = this.$store.getters['allGames/allGames'];
      this.game = allGames.find(game => game.id == id);
    },
    formattedPrice(price) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
    }
  }
};
</script>
<style scoped>
.cartDetail{
  position: relative;
  bottom: 12px;
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
  top: -54px;
  right: 51px;
  width: 331px;
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
  left: 165px;
  border-radius: 20px;
  width: 557px;
  height: 410px;
  background-color: #e0e0e081;
}

.gameInfo{
  display: flex;
  position: relative;
  bottom: 36px;
  left: -273px;
  margin-top: 30px;
  flex-direction: column;
  right: 76px;
}

.gameInfo h1{
  position: relative;
  left: 3px;
  font-weight: bold;
  font-size: 22px;
}

.gameInfo p:nth-child(2){
  position: relative;
  font-size: 17px;
  top: -32px;
}

.gameInfo p:nth-child(3){
  margin-left: 19px;
  width: 428px;
  position: relative;
  top: -46px;
  right: 13px;
}
.syokai{
  position: relative;
  bottom: 71px;
  width: 358px;
  font-size: 12px;
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
  margin-left: 183px;
  background-color: #e0e0e081;
  width: 200px;
  height: 320px;
}

.cartItem span:nth-child(1){
  font-size: 35px;
  position: relative;
  top: 0px;
}

#stockAmount{
  color: #9f0707;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 16px;
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
  left: 6px;
  bottom: 19px;
}

.cartBtn{
  width: 46px;
  height: 46px;
  font-size: 32px;
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
  margin-left: 45px;
  height: 41px;
  width: 115px;
  border-radius: 20px;
  border: none;
  background-image: linear-gradient(to left, rgb(130, 130, 255), rgb(237, 46, 237));
  cursor: pointer;
  transition: background-image 0.5s ease;
  position: absolute;
  bottom: 103px;
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

span:nth-child(2){
  position: relative;
  font-size: 18px;
  top: 11px;
}

span:nth-child(3){
  position: relative;
  top: 4px;
}
</style>