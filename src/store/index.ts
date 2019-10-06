import Vue from 'vue';
import Vuex from 'vuex';
import { getSentiment } from '@/api/algorithmia';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [{
      id: 1,
      checked: false,
      description: 'Die!',
    }],
    notification: {
      show: false,
      message: '',
      type: 'success',
    },
  },
  mutations: {
    addTodo(state, todoItem: { id: number, checked: false, description: string }) {
      state.todoItems.push(todoItem);
    },
    deleteTodo(state, itemId) {
      state.todoItems = state.todoItems.filter((item) => item.id !== itemId);
    },
    showNotification(state, payload: { type: string, message: string }) {
      state.notification = { ...payload, show: true };
    },
    hideNotification(state) {
      state.notification.show = false;
    },
  },
  actions: {
    async createTodo({ state, commit }, todoItem) {

      if (todoItem.description.length <= 0) {
        commit('showNotification', {
          type: 'danger',
          message: 'Type something!',
        });
        setTimeout(() => { commit('hideNotification'); },
          3000);

        return;
      }

      const sentiment = await getSentiment(todoItem.description);

      if (sentiment >= 0) {
        commit('showNotification', {
          type: 'danger',
          message: 'You\'re too positive!',
        });
        setTimeout(() => { commit('hideNotification'); },
          3000);

        return;
      }

      let nextId = 1;
      try {
        nextId = state.todoItems[state.todoItems.length - 1].id + 1;
      } catch (e) {
        nextId = 1;
      }

      commit('hideNotification');
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
