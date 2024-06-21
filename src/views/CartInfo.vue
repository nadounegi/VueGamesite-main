<template>
  <div>
    <BreadCrumb/>
    <h1 class="title">ショッピングカート</h1>
    <!-- 购物车内有商品时 -->
    <div v-if="cartItems.length > 0">  
      <table>
        <thead>
          <tr class="thead">
            <th>
              <div class="selected">
                <input type="checkbox" v-model="isAll">
                <h3>全選</h3>
              </div>
            </th>
            <th>写真</th>
            <th>ゲーム名</th>
            <th>数量</th>
            <th>単価</th>
            <th>合計</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr class="tr" :class="{active:true}" v-for="item in cartItems" :key="item.id"> -->
            <tr class="tr" :class="{active:item.isChecked}" v-for="item in cartItems" :key="item.id">
            <td class="ckb"><input type="checkbox" v-model="item.isChecked"></td>
            <td><img :src="item.url" :alt="item.name" width="80px" height="100px"></td>
            <td>{{ item.name }}</td>
            <td>
              <div class="my-input-number">
                <button class="btn" @click="decreaseQuantity(item)">
                   - 
                  </button>
                <span class="my-input__inner">{{ item.quantity }}</span>
                <button class="btn" @click="increaseQuantity(item)">
                   +
                   </button>
              </div>
            </td>
            <td>￥{{ item.price }}</td>
            <td>￥{{ item.price * item.quantity }}</td>
            <td>
              <button @click="removeFromCart(item.id)" class="delbtn">削除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="bottom">
        <span class="totalAmount">合計&nbsp;&nbsp;:&nbsp;&nbsp;¥{{ cartTotal }}</span>
        <button class="pay" @click="pay">決済({{ cartQuantity }})</button>
      </div>
    </div>
    <!-- 购物车内无商品时 -->
    <div v-else class="empty">🛒カートに商品はありません</div> 
  </div>
</template>

<script>
export default {
  created(){
    //ローカルストレージからデータを取得
    const cartItems = localStorage.getItem('cartItems');
    if(cartItems){
      this.$store.commit('setCartItems',JSON.parse(cartItems));
    }
  },
  computed: {
    isAll:{
      get(){
        //選択肢が全て選ばれたら、全選択ボタンも選択される
        return this.cartItems.every(item => item.isChecked);
      },
      //全選択ボタンが選択されたら、全ての選択肢も選択される
      set(value){
        this.cartItems.forEach(item => item.isChecked = value);
      }
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartQuantity() {
      return this.$store.getters.cartQuantity;
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    },
    increaseQuantity(item) {
      this.$store.dispatch('updateCart', { itemId: item.id, quantity: item.quantity + 1 });
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.$store.dispatch('updateCart', { itemId: item.id, quantity: item.quantity - 1 });
      }
    },
    pay() {
      this.$store.dispatch('addOrder');
      this.$router.push('/payMent');
    }
  },
  watch: {
    cartItems: {
      deep: true,
      handler(newValue){
        // 将变化后的值保存到本地存储中（转换为JSON）
        localStorage.setItem('cartItems', JSON.stringify(newValue));
      }
    }
  }
};
</script>

<style scoped>
/* 现有样式 */
body {
  font-family: Arial, sans-serif;
}

.main .content {
    position: relative;
    left: 120px;
    margin-top: 159px;
    margin-left: -211px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 1339px;
}

.breadcrumb[data-v-a07f5df1] {
    position: fixed;
    top: 176px;
    left: 208px;
    z-index: 1001;
}

h1 {
  text-align: left;
  left: 136px;
}


table {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
}

.thead th {
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
}

.thead {
  background-color: #f2f2f2;
}

.selected {
  display: flex;
  position: relative;
  left: 20px;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.selected h3 {
  margin-top: 8px;
  font-size: 15px;
  font-weight: bold;
}

.selected input {
  width: 20px;
  height: 20px;
  margin-top: 1px;
}

tbody tr {
  line-height: 7;
}

tbody tr td {
  text-align: center;
}

.tr td {
  border: 1px solid #ddd;
}

.tr.active td {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.ckb {
  text-align: center;
  width: 99px;
}

.ckb input {
  width: 20px;
  height: 20px;
  margin-top: 7px;
}

td img {
  display: block;
  margin: auto;
}

.delbtn {
  position: relative;
  left: 43px;
  bottom: 6px;
  width: 69px;
  height: 44px;
  display: flex;
  font-size: 20px;
  color: white;
  background-color: #ff4d4d;
  align-items: center;
  justify-content: center;
}

/* .btn {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 29%;
  cursor: pointer;
} */

td button:hover {
  background-color: #ff1a1a;
}

.my-input-number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.my-input-number button {
  width: 30px;
  height: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
  padding-bottom: 2px;
}

.my-input__inner {
  margin-top: 15px;
}

/* 底部 */
.bottom {
  display: flex;
  justify-content: flex-end;
  margin-right: 167px;
}

.bottom span {
  margin-top: 20px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
}

.bottom button {
  font-size: 16px;
  padding-left: 6px;
  font-weight: bold;
  width: 87px;
  height: 32px;
  color: white;
  background-color: #ff4d4d;
}

.empty {
  padding: 75px;
  text-align: center;
  font-size: 30px;
  color: #909399;
}

/* 使面包屑导航固定 */
.breadcrumb {
  position: fixed;
  top: 10px; /* 具体高度可以根据需要调整 */
  left: 20px; /* 具体位置可以根据需要调整 */
  z-index: 1001; /* 确保在其他内容之上显示 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .thead, .tr {
    display: block;
  }

  .thead th, .tr td {
    display: block;
    text-align: right;
    padding: 10px;
  }

  .thead th {
    text-align: left;
  }

  .tr td {
    text-align: left;
    position: relative;
    padding-left: 50%;
  }

  .tr td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 10px;
    font-weight: bold;
    text-align: left;
  }

  .bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .bottom span, .bottom button {
    margin: 10px 0;
  }
}

</style>
