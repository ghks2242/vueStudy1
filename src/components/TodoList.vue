<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" :key="todoItem.item" class="shadow">
        <span class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem,index)"> 체크 </span>
        <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn">
          <i @click="removeTodo(todoItem, index)">삭제</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    propsdata : {
      type: Array,

    },
  },
  methods: {
    removeTodo(item, key) {
      console.log(item +" , " + key)
      localStorage.removeItem(item)
      this.todoItems.splice(key, 1)
    },
    toggleComplete(item, key) {
      console.log(item + " " + key)
      item.completed = !item.completed;
      localStorage.removeItem(item.item)
      localStorage.setItem(item.item, JSON.stringify(item))

    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: center;
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
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color:#de4343
}
</style>