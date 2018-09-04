import Vue from "vue";
import TodoList from "./components/TodoList.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <TodoList />
    </div>
    `,
    components: {
        TodoList
    }
});
