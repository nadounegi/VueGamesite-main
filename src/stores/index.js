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
    cart: JSON.parse(localStorage.getItem('cartItems')) || [],
    orderHistory: []
  },
  mutations: {
    AddToCart(state, cartLoad) {// 添加商品到购物车
      const existItem = state.cart.find(item => item.id === cartLoad.id);
      if (existItem) {// 如果购物车中已经有该商品，则只增加数量
        existItem.quantity += cartLoad.quantity;
      } else {// 如果购物车中没有该商品，则添加到购物车
        cartLoad.isChecked = false;
        state.cart.push(cartLoad);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cart));// 将购物车数据保存到本地存储
    },
    RemoveFromCart(state, itemId) {// 从购物车中删除商品
      state.cart = state.cart.filter(item => item.id !== itemId);// 过滤掉要删除的商品
      localStorage.setItem('cartItems', JSON.stringify(state.cart));// 将购物车数据保存到本地存储
    },
    UpdateCart(state, { itemId, quantity }) {// 更新购物车中商品的数量
      const item = state.cart.find(item => item.id === itemId);
      if (item) {// 如果购物车中有该商品，则更新数量
        item.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cart));// 将购物车数据保存到本地存储
    },
    setCartItems(state, cartItems) {
      state.cart = cartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },
    AddOrder(state, order) {
      state.orderHistory.push(order);
    },
    ClearCart(state) {
      state.cart = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
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
