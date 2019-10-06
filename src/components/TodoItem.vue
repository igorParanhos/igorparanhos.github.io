<template>
    <div class="todo-item">
        <CheckBox :checked="checked"/>
        <div class="title">{{description}}</div>

        <div class="right">
            <Button @click="$emit('delete')">X</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Button from './Button.vue';
import CheckBox from './CheckBox.vue';

@Component({
    components: {
        CheckBox,
        Button,
    },
})
export default class TodoItem extends Vue {
  @Prop() private checked!: boolean;
  @Prop() private description!: string;
}
</script>

<style lang="scss" scoped>
.todo-item {
    // display: inline-block;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 10px 0 10px 0;
    text-align: left;
}
.title {
    // color: #f93939;
    margin: auto;
    display: inline-block;
    font-size: 24px;
    padding: 15px 0 0 15px;
    box-sizing: border-box;
}
.right {
    float: right;
}
</style>