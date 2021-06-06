import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
    state: {
        name: "Unknown Pokemon"
    },
    mutations: {
        change(state, value) {
            state.name = value
        }
    },
    actions: {
        async changeData(context) {
            try {
                const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                const data = response.data.forms[0].name
                const datastring = JSON.stringify(data)
                context.commit('change', datastring)
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getData(state) {
            return state.name
        }
    }
})