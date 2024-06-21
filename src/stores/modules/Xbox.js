import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            XboxList: []
        }
    },
    mutations:{
        updateXboxList(state, newList){
            state.XboxList = newList
        }
    },
    actions:{
        async getXboxList(ctx){
            const res = await axios.get('http://localhost:3000/XboxList')
            ctx.commit('updateXboxList', res.data)
        }
    },
    getters:{
        XboxList: state => state.XboxList
    }
}