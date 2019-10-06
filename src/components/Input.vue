<template>
  <input class="base-input" type="text" @change="$emit('change', $event.target.value)" :value="value" :name="name" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class Input extends Vue {
    @Prop() private value!: number;
    @Prop() private name!: string;
}
</script>

<style>
.base-input {
    min-height: 35px;
    padding: 10px 0 10px 0;
}
</style>