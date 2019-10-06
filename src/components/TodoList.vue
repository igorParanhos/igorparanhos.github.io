<template>
    <div class="todo-list">
        <TodoItem
            :key="item.id"
            :checked="item.checked"
            :description="item.description"
            @delete="deleteTodo(item.id)"
            v-for="item in getTodos" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import TodoItem from './TodoItem.vue';

@Component({
    components: {
        TodoItem,
    },
    computed: mapGetters(['getTodos']),
    methods: {
        ...mapActions(['deleteTodo']),
    },
})
export default class TodoList extends Vue {
    private deleteTodo!: (id: number) => void;

    private delete(id: number) {
        this.deleteTodo(id);
    }
}
</script>

<style lang="scss">

</style>