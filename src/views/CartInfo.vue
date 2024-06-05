<template>
    <div>
      <BreadCrumb/>
      <h1 class="title">ショッピングカート</h1>
      <table>
        <thead>
          <tr class="thead">
            <th>
              <div class="selected">
                <input type="checkbox" checked>
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
          <tr class="tr active" v-for="item in cartItems" :key="item.id">
            <td class="ckb"><input type="checkbox" checked></td>
            <td><img :src="item.url" :alt="item.name" width="80px" height="100px"></td>
            <td>{{ item.name }}</td>
            <td>
              <div class="my-input-number">
                <button class="decrease" @click="decreaseQuantity(item)"> - </button>
                <span class="my-input__inner">{{ item.quantity }}</span>
                <button class="increase" @click="increaseQuantity(item)"> + </button>
              </div>
            </td>
            <td>￥{{ item.price }}</td>
            <td>￥{{ item.price * item.quantity }}</td>
            <td><button @click="removeFromCart(item.id)">削除</button></td>
          </tr>
        </tbody>
      </table>
      <div class="bottom">
        <span class="totalAmount">合計&nbsp;&nbsp;:&nbsp;&nbsp;¥{{ cartTotal }}</span>
        <button class="pay">決済({{ cartItems.length }})</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return this.$store.getters.cartItems; // カート内の商品リストを取得
      },
      cartTotal() {
        return this.$store.getters.cartTotal; // カート内の商品総額を取得
      }
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId); // カートから商品削除アクションを呼び出す
      },
      increaseQuantity(item) {
        this.$store.dispatch('updateCart', { itemId: item.id, quantity: item.quantity + 1 }); // カート内の商品数量を増加アクションを呼び出す
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          this.$store.dispatch('updateCart', { itemId: item.id, quantity: item.quantity - 1 }); // カート内の商品数量を減少アクションを呼び出す
        }
      }
    }
  }
  </script>