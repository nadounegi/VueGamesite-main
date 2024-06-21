import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            VGList: []
        }
    },
    mutations:{
        updateVGList(state, newList){
            state.VGList = newList
        }
    },
    actions:{
        async getVGList(ctx){
            const res = await axios.get('http://localhost:3000/VGList')
            ctx.commit('updateVGList', res.data)
        }
    },
    getters:{
        VGList: state => state.VGList
    }
}