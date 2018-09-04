<!-- src/components/Hello.vue -->
<template>
    <div>
      <vi-wrapper
        grid
        class="ViComponent"
      >
          <vi-card
            title="Todo List"
            title-size="1"
          >
            <div slot="body">
              <div class="FormTodo">
                <vi-input
                  v-model="textNewTodo"
                />
                <vi-button type="submit" @click="addTodo" success>Add todo</vi-button>
              </div>
            </div>
        </vi-card>
        <vi-card v-for="(todo, index) in todoList">
          <div slot="body">
            <div class="FormTodo">
              <div>{{todo}}</div>
              <vi-button type="submit" @click="todoList.splice(index, 1);" danger>remove todo</vi-button>
            </div>
          </div>
        </vi-card>
      </vi-wrapper>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ViUi from "vue-vi-ui";
import 'vue-vi-ui/dist/vi-ui.min.css';

Vue.use(ViUi);

let
  textNewTodo: string = '',
  todoList: string[] = [];

export default Vue.extend({
    data() {
      return {
        textNewTodo,
        todoList,
      }
    },

    methods: {
      addTodo() {
        this.textNewTodo !== '' &&
        this.todoList.push(this.textNewTodo);
        this.textNewTodo = '';
      }
    }
});
</script>

<style>
  body {
    background: #CCC;
  }

  .FormTodo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
  }

  .ViInput {
    padding-right: 20px;
  }

  .contentWrapper {
    white-space: nowrap;
  }

  .contentWrapper {
    width: 100%;
  }
</style>
