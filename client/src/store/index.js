import { createStore } from 'vuex'

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
        changeData(context) {
            this.state.name = "Pokemon Data is appearing."
            context.commit("change", this.getters.getData)
        }
    },
    getters: {
        getData(state) {
            return state.name
        }
    }
})