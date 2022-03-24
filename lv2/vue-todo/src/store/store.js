import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    console.log(arr)
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, newTodoItem) {
      var obj = {completed: false, item: newTodoItem}
      localStorage.setItem(newTodoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todo.item)
      state.todoItems.splice(payload.idx, 1);
    },
    completeOneItem(state, payload) {
      state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed      
      localStorage.setItem(payload.todo.item, JSON.stringify(payload.todo))
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});