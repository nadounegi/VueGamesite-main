import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [] // 购物车的内容
  },
  mutations: {
    AddToCart(state, cartLoad) {
      const existItem = state.cart.find(item => item.id === cartLoad.id);
      if (existItem) {
        existItem.quantity += cartLoad.quantity;
      } else {
        cartLoad.isChecked = false;
        state.cart.push(cartLoad);
      }
    },
    RemoveFromCart(state, itemId) {
      state.cart = state.cart.filter(item => item.id !== itemId);
    },
    UpdateCart(state, { itemId, quantity }) {
      const item = state.cart.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('AddToCart', product);
    },
    removeFromCart({ commit }, itemId) {
      commit('RemoveFromCart', itemId);
    },
    updateCart({ commit }, cartLoad) {
      commit('UpdateCart', cartLoad);
    }
  },
  getters: {
    cartItems: state => state.cart, // 购物车的内容
    cartTotal: state => state.cart.reduce((total, item) => {
      if (item.isChecked) {
        return total + item.price * item.quantity;
      } else {
        return total;
      }
    }, 0), // 购物车的总金额
    cartQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0)
  }
});

export default store;
