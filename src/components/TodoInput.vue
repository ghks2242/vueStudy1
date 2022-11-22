<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button @click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="addBtn" @click="addTodo">추가</i>
    </span>
    <Alert-modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <button class="modal-default-button" @click="showModal = false">
          OK
        </button>
      </h3>
      <h3 slot="body">아무것도 입력하지 않았습니다.</h3>
      <h3 slot="footer">custom footer</h3>
    </Alert-modal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";
export default {
  components: {
    AlertModal,
  },
  data: () => {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
    close() {},
  },
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
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 05px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>