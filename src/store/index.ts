import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [{
      id: 1,
      checked: false,
      description: 'My First Todo',
    }],
  },
  mutations: {
    addTodo(state, todoItem: { id: number, checked: false, description: string }) {
      state.todoItems.push(todoItem);
    },
    deleteTodo(state, itemId) {
      state.todoItems = state.todoItems.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    createTodo({ state, commit }, todoItem) {
      const nextId = state.todoItems[state.todoItems.length - 1].id + 1;
      commit('addTodo', { ...todoItem, id: nextId });
    },
    deleteTodo({ state, commit }, itemId) {
      commit('deleteTodo', itemId);
    },
  },
  getters: {
    getTodos(state) {
      return state.todoItems;
    },
  },
});
