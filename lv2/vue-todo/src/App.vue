<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeTodoItem="removeOneItem"
              v-on:completeTodoItem="completeOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todoItems: []
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
  methods: {
    addOneItem: function(newTodoItem) {
      var obj = {completed: false, item: newTodoItem}
      localStorage.setItem(newTodoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem: function(todo, idx) {
      localStorage.removeItem(todo.item)
      this.todoItems.splice(idx, 1);
    },
    completeOneItem: function(todoItem) {
      // this.todoItems[idx].completed = !this.todoItems[idx].completed      
      todoItem.completed = !todoItem.completed 
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>