<template>
  <div class="home">
    <div class="page-title">DoIt Marvin</div>

    <h1
      :class="`notification ${!notification.show ? 'hidden' : ''}`">
      {{notification.message}}
    </h1>

    <hr class="division" />

    <div class="container">
      <div class="is-8">
        <Input type="text" :fullwidth="true" v-model="todoName" />
      </div>
      <div class="is-4">
        <Button @click="add" :primary="true" :fullwidth="true">Adicionar</Button>
      </div>
    </div>

    <TodoList />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';

import HelloWorld from '@/components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { getSentiment } from '@/api/algorithmia';

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
  mounted() {
    getSentiment('smoke cigarretes');
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
.division {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: 3px solid #cdcdcd;
  margin: 0 100px 40px 100px;
}
.is {
  &-8 {
    flex: 8;
    padding: 10px;
  }
  &-4 {
    flex: 4;
    padding: 10px;
  }
}
.container {
  display: flex;
}
.notification {
  color: red;
  transition: all .2s ease;
  height: 100px;
  width: 100%;
}
.hidden {
  color: transparent;
  height: 0;
  width: 0;
}
</style>