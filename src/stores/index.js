import Vue from 'vue';
import Vuex from 'vuex';
import PS4PS5 from './modules/PS4PS5';
import NS from './modules/NS';
import Xbox from './modules/Xbox';
import PC from './modules/PC';
import VideoGame from './modules/VideoGame';
import allGames from './modules/allGames';
import images from './modules/images';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
    orderHistory: []
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
    },
    SetCartItems(state, cartItems) {
      state.cart = cartItems;
    },
    AddOrder(state, order) {
      state.orderHistory.push(order);
    },
    ClearCart(state) {
      state.cart = [];
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
    },
    setCartItems({ commit }, cartItems) {
      commit('SetCartItems', cartItems);
    },
    addOrder({ commit, state }) {
      const newOrder = {
        id: new Date().getTime(), // 生成唯一订单ID
        date: new Date().toLocaleString(),
        items: state.cart.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total: state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
      };
      commit('AddOrder', newOrder);
      commit('ClearCart');
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((total, item) => {
      if (item.isChecked) {
        return total + item.price * item.quantity;
      } else {
        return total;
      }
    }, 0),
    cartQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0),
    orderHistory: state => state.orderHistory
  },
  modules: {
    PS4PS5,
    NS,
    Xbox,
    PC,
    VideoGame,
    allGames,
    images
  }

});

export default store;
