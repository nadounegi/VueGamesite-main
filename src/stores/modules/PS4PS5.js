import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            PS4PS5List: []
        }
    },
    mutations:{
        updatePS4PS5List(state, newList){
            state.PS4PS5List = newList
        }
    },
    actions:{
        async getPS4PS5List(ctx){
            const res = await axios.get('http://localhost:3000/PS4PS5List')
            ctx.commit('updatePS4PS5List', res.data)
        }
    },
    getters:{
        PS4PS5List: state => state.PS4PS5List
    }
}