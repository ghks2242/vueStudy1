<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
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
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // created() {
  //   console.log("create");
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       this.todoItems.push(
  //         JSON.parse(localStorage.getItem(localStorage.key(i)))
  //       );
  //       // this.todoItems.push(localStorage.key(i))
  //     }
  //   }
  // },
  methods: {
    // addOneItem(item) {
    //   const obj = { completed: false, item: item }; // eslint-disable-line no-unused-vars
    //   localStorage.setItem(item, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(item, key) {
    //   localStorage.removeItem(item.item);
    //   this.todoItems.splice(key, 1);
    // },
    // toggleOneItem(item, key) {
    //   this.todoItems[key].completed = !this.todoItems[key].completed;
    //   localStorage.removeItem(item.item);
    //   localStorage.setItem(item.item, JSON.stringify(item));
    // },
    // clearAllItem() {
    //   this.todoItems = [];
    //   localStorage.clear();
    // },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
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
