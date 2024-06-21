import axios from 'axios';

export default {
    namespaced: true,
    state (){
        return {
            allGames: []
        }
    },
    mutations:{
        updateallGames(state, newList){
            state.allGames = newList
        }
    },
    actions:{
        async getallGames(ctx){
            const res = await axios.get('http://localhost:3000/allGames')
            ctx.commit('updateallGames', res.data)
        }
    },
    getters:{
        allGames: state => state.allGames
    }
}