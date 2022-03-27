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

const state =  {
  todoItems: storage.fetch()
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems
  }
}

const mutations = {
  addOneItem(state, newTodoItem) {
    var obj = {completed: false, item: newTodoItem}
    localStorage.setItem(newTodoItem, JSON.stringify(obj))
    state.todoItems.push(obj)
  },
  removeOneItem(state, payload) {
    console.log(payload)
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.idx, 1);
  },
  completeOneItem(state, payload) {
    state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed      
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state,
  getters,
  mutations
}