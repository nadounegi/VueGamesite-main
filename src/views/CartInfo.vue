<template>
  <div class="cart-page">
  <h1 class="cart__title">ショッピングカート</h1>
  <div class="cart">
    <!-- 购物车内有商品时 -->
    <div class="cart__container" v-if="cartItems.length > 0">  
      <table class="cart__table">
        <thead class="cart__thead">
          <tr class="cart__tr">
            <th class="cart__th">
              <div class="cart__selected">
                <input type="checkbox" class="cart__checkbox" v-model="isAll">
                  <h3 class="cart__checkbox-label">全選</h3>
              </div>
            </th>
            <th class="cart__th">写真</th>
            <th class="cart__th">ゲーム名</th>
            <th class="cart__th">数量</th>
            <th class="cart__th">単価</th>
            <th class="cart__th">合計</th>
            <th class="cart__th">操作</th>
          </tr>
        </thead>
        <tbody class="cart__tbody">
          <!-- 選択肢が全て選ばれたら、全選択ボタンも選択される -->
            <tr class="cart__tr" 
            :class="{'cart__tr--active':item.isChecked}" 
            v-for="item in cartItems" 
            :key="item.id"
            >
            
            <td class="cart__td">
              <input type="checkbox" v-model="item.isChecked">
            </td>

            <td class="cart__td">
              <img class="cart__image" :src="item.url" 
              :alt="item.name" 
              width="80px" height="100px"
              >
            </td>

            <td class="cart__td">{{ item.name }}</td>
            <td class="cart__td">

              <div class="cart__quantity-control">
                <button class="cart__quantity-btn" 
                @click="decreaseQuantity(item)">
                   - 
                </button>
                <span class="cart__quantity">
                  {{ item.quantity }}
                </span>
                <button class="cart__quantity-btn" @click="increaseQuantity(item)">
                   +
                   </button>
              </div>
            </td>
            <td class="cart__td">
              ￥{{ item.price }}
            </td>
            <td class="cart__td">
              ￥{{ item.price * item.quantity }}
            </td>
            <td class="cart__td">
              <button class="cart__button--del" 
              @click="removeFromCart(item.id)">
              削除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    <!-- 底部 -->
      <div class="cart__bottom">
        <span class="cart__total">
          合計&nbsp;&nbsp;:&nbsp;&nbsp;¥{{ cartTotal }}
        </span>
        <button class="cart__button--pay" @click="pay">決済({{ cartQuantity }})</button>
      </div>
    </div>
    <!-- 购物车内无商品时 -->
    <div v-else class="cart__empty">🛒カートに商品はありません</div> 
  </div>
</div>
</template>

<script>
export default {
 
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
html,body {
  margin: 0;
  font-family: Arial, sans-serif;
  height: 100%;
}

.cart-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cart__title {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  margin-left: 292px;
  width: 208px;
  color: rgb(94,92,92);
  text-align: left;
  font-size: 20px;
  padding: 10px 0;
}

.cart {
  flex: 1;
  overflow-y: auto;
  width: 815px;
  padding-left: 273px;
}

.cart__container {
  width: 100%;
  margin: 0 auto;
}

.cart__table {
  width: 100%;
  border-collapse: collapse;
}

.cart__thead {
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 100;
}

.cart__thead .cart__tr {
  line-height: 1;
}

.cart__thead .cart__th {
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
}

.cart__selected {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__checkbox-label {
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
}

.cart__checkbox {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.cart__tbody .cart__tr {
  line-height: 1.5;
}

.cart__tbody .cart__tr .cart__td {
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
}

.cart__td .cart__image {
  display: block;
  margin: auto;
}

.cart__button--del {
  width: 60px;
  height: 30px;
  font-size: 14px;
  color: white;
  background-color: #ff4d4d;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.cart__button--del:hover {
  background-color: #ff1a1a;
}

.cart__quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.cart__quantity-btn {
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px;
}

.cart__quantity {
  font-size: 16px;
}

.cart__buttom {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cart__total {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}

.cart__button--pay {
  width: 80px;
  height: 30px;
  font-size: 14px;
  color: white;
  background-color: #ff4d4d;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.cart__button--pay:hover {
  background-color: #ff1a1a;
}

.cart__empty {
  text-align: center;
  font-size: 20px;
  color: #909399;
  margin-top: 50px;
}
/* html,body {
  height: 100%;
  margin: 0;S
  font-family: Arial, sans-serif;
}

.cart-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cart__title {
  margin-bottom: -24px;
  margin-left: 292px;
  width: 208px;
  color: rgb(94, 92, 92);
  z-index: 100;
  text-align: left;
  font-size: 20px;
}

.cart{
  flex: 1;
  overflow-x: hidden;
  padding-top: 0px;
  padding-left: 41px;
  width: 1048px;
}

.cart__container {
  width: 119%;
  margin: 0 auto;
  overflow-y: scroll;
  height: calc(37% - -842px);
  position: relative;
  left: 133px;
}

.cart__table {
  width: 62%;
  height: 540px;
  border-collapse: collapse;
  position: relative;
  top: 28px;
  left: 139px;
}

.cart__thead {
  z-index: 100;
}

.cart__thead .cart__tr{
  line-height: 1;
}

.cart__thead .cart__th {
  padding-left: 10px;
  background-color: #f2f2f2;
  text-align: center;
}

.cart__selected {
  display: flex;
  position: relative;
  left: 20px;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.cart__checkbox-label {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}

.cart__checkbox {
  width: 13px;
  height: 13px;
  margin-top: 1px;
}

.cart__tbody{
}

.cart__tbody .cart__tr {
  line-height: 1;
}

.cart__tbody .cart__tr .cart__td {
  text-align: center;
  border: 1px solid #ddd;

}

.cart__tr .cart__td {
  border: 1px solid #ddd;
}

.cart__tr--active .cart__td {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.cart__td {
  text-align: center;
  width: 99px;
}

.cart__td .cart__image {
  display: block;
  margin: auto;
}

.cart__button--del {
  position: relative;
  left: 21px;
  bottom: -4px;
  width: 69px;
  height: 44px;
  display: flex;
  font-size: 20px;
  color: white;
  background-color: #ff4d4d;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.cart__button--del:hover {
  background-color: #ff1a1a;
}

.cart__quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.cart__quantity-btn {
  font-size: 26px;
  color: #535151;
  width: 30px;
  height: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background-color: #e0e0e0;
  padding-bottom: 2px;
  border: none;
  cursor: pointer;
}

.cart__quantity {
  font-size: 23px;
  margin-top: 5px;
  color: #6e6b6b;
}

.cart__bottom {
  display: flex;
  width: 296px;
  justify-content: flex-end;
  margin-left: 79px;
}

.cart__total {
  margin-top: 20px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
}

.cart__button--pay {
  font-size: 16px;
  padding-left: 6px;
  font-weight: bold;
  width: 87px;
  height: 32px;
  color: white;
  position: relative;
  top: 15px;
  background-color: #ff4d4d;
  border: none;
  cursor: pointer;
}

.cart__button--pay:hover {
  background-color: #ff1a1a;
}  

.cart__empty {
  width: 410px;
  position: relative;
  left: 718px;
  text-align: center;
  font-size: 30px;
  color: #909399;
} */

</style>
