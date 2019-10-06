<template>
  <div class="home">
    <div class="page-title">DoIt Marvin</div>

    <div
      :class="`notification ${!notification.show ? 'hidden' : ''}`">
      {{notification.show ? notification.message : ''}}
    </div>

    <hr class="division" />

    <div class="todo-container">
      <div class="container">
        <div class="column is-8">
          <Input type="text" :fullwidth="true" v-model="todoName" />
        </div>
        <div class="column is-4">
          <Button @click="add" :rounded="true" :primary="true" :fullwidth="true">+</Button>
        </div>
      </div>

      <TodoList />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';

import HelloWorld from '@/components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

@Component({
  components: {
    TodoList,
    Button,
    Input,
  },
  data() {
    return { todoName: '' };
  },
  computed: mapState(['notification']),
  methods: mapActions(['createTodo']),
})
export default class Home extends Vue {
  private todoName!: string;
  private createTodo!: (args: object) => void;

  private add() {
    this.createTodo({
      id: 0,
      description: this.todoName,
      checked: false,
    });
    this.todoName = '';
  }
}
</script>

<style lang="scss">

.todo-container {
  max-width: 500px;
}

.page-title {
  font-size: 120px;
  padding: 30px 0 30px 0;

  @media(max-width: 500px) {
    font-size: 40px;
  }

}
.division {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: 3px solid #cdcdcd;
  margin: 0 100px 40px 100px;
}
.column {
  padding: 10px;
  &.is {
    &-1 {
      flex: 1;
    }
    &-2 {
      flex: 2;
    }
    &-3 {
      flex: 3;
    }
    &-4 {
      flex: 4;
    }
    &-5 {
      flex: 5;
    }
    &-6 {
      flex: 6;
    }
    &-7 {
      flex: 7;
    }
    &-8 {
      flex: 8;
    }
    &-9 {
      flex: 9;
    }
    &-10 {
      flex: 10;
    }
    &-11 {
      flex: 11;
    }
    &-12 {
      flex: 12;
    }
  }
}
.container {
  display: flex;
}
.notification {
  position: absolute;

  right: 40px;
  bottom: 40px;

  background: rgba(255, 0, 0, 0.35);
  color: #fff;

  // transition: background-color 1s ease;
  transition: all .3s ease-in;

  height: 100px;
  width: 40%;

  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background: rgba(255, 0, 0, .7);
    color: #fff;
  }
  @media(max-width: 500px) {
    width: 80%;
  }
}
.hidden {
  transition: all .3s ease;

  pointer-events: none;

  background: transparent;
  color: transparent;
}
</style>