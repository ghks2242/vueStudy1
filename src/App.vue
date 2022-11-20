<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list :propsdata="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
  data() {
      return {
        todoItems: [],
      }
    },
  created() {
    console.log("create")
    if(localStorage.length>0){
      for(let i=0; i< localStorage.length; i++){
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        // this.todoItems.push(localStorage.key(i))
      }
    }
  },
  methods: {
    addOneItem(item) {
      var obj = {completed: false, item: item} // eslint-disable-line no-unused-vars
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
  }
};
</script>

<style>

body { 
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width:200px;
}
button {
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
