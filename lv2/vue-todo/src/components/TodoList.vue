<template>
  <div>
    <ul>
      <li v-for="(todoItem, idx) in todoItems" v-bind:key="todoItem.key" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplate(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeItem(todoItem, idx)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
      <!-- <button class="checkBtn" v-on:click=""></button>
      <button class="checkBtnCompleted"></button>
      <button class="textCompleted"></button> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  created: function() {
    console.log('created')
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
    removeItem: function(item, key) {
      localStorage.removeItem(item)
      this.todoItems.splice(key, 1);
    },
    toggleComplate: function(todoItem) {
      todoItem.completed = !todoItem.completed 
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>