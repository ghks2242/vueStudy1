import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/* eslint-disable */
const storage = {
    fetch() {
        const arr= [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                // this.todoItems.push(localStorage.key(i))
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it',
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, item) {
            const obj = { completed: false, item: item }; // eslint-disable-line no-unused-vars
            localStorage.setItem(item, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            // item, key
            localStorage.removeItem(payload.item.item);
            state.todoItems.splice(payload.key, 1);
        },
        toggleOneItem(state, payload) {
            // item, key
            state.todoItems[payload.key].completed = !state.todoItems[payload.key].completed;
            localStorage.removeItem(payload.item.item);
            localStorage.setItem(payload.item, JSON.stringify(payload));
        },
        clearAllItem(state) {
            state.todoItems = [];
            localStorage.clear();
        },
    }
})