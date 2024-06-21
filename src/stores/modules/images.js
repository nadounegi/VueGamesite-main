import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      imagesList: []
    };
  },
  mutations: {
    updateimagesList(state, newList) {
      state.imagesList = newList;
    }
  },
  actions: {
    async getimagesList(ctx){
        const res = await axios.get('http://localhost:3000/imagesList')
        ctx.commit('updateimagesList', res.data)
    }
  },
  getters:{
    imagesList: state => state.imagesList
}
};
