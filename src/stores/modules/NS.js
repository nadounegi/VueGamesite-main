import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            NSList: []
        }
    },
    mutations:{
        updateNSList(state, newList){
            state.NSList = newList
        }
    },
    actions:{
        async getNSList(ctx){
            const res = await axios.get('http://localhost:3000/NSList')
            ctx.commit('updateNSList', res.data)
        }
    },
    getters:{
        NSList: state => state.NSList
    }
}