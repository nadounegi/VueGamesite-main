import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            PCList: []
        }
    },
    mutations:{
        updatePCList(state, newList){
            state.PCList = newList
        }
    },
    actions:{
        async getPCList(ctx){
            const res = await axios.get('http://localhost:3000/PCList')
            ctx.commit('updatePCList', res.data)
        }
    },
    getters:{
        PCList: state => state.PCList
    }
}