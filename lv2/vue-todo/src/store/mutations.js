const addOneItem = (state, newTodoItem) => {
  var obj = {completed: false, item: newTodoItem}
  localStorage.setItem(newTodoItem, JSON.stringify(obj))
  state.todoItems.push(obj)
}
const removeOneItem = (state, payload) => {
  console.log(payload)
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems.splice(payload.idx, 1);
}
const completeOneItem = (state, payload) => {
  state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed      
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, completeOneItem, clearAllItems }