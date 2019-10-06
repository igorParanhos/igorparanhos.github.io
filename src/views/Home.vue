<template>
  <div class="home">
    <div class="page-title">DoIt Marvin</div>
    <div class="container">
      <Input type="text" v-model="todoName" />
      <Button @click="add">Adicionar</Button>
    </div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

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
.page-title {
  font-size: 120px;
  padding: 30px 0 30px 0;
}
</style>