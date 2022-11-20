<template>
  <div class="inputBox shadow" >
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button @click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="addBtn" @click="addTodo">추가</i>
    </span>
    </div>
</template>

<script>

export default {
  data: ()=> {
    return {
      newTodoItem: ""
    }
  },
  watch() {

  },
  methods: {
    addTodo() {
      if (this.newTodoItem !=='') {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 05px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>