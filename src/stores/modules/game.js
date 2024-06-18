import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      gameList: []
    };
  },
  mutations: {
    updateGameList(state, newList) {
      state.gameList = newList;
    }
  },
  actions: {
    async getGameList({ commit }) {
      try {
        const res = await axios.get('http://localhost:3000/gameList');
        commit('updateGameList', res.data);
      } catch (error) {
        console.error('获取游戏列表时出错:', error);
      }
    }
  },
  getters: {}
};
