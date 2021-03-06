import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get( 'https://jsonplaceholder.typicode.com/todos' );

        console.log( response.data );
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}