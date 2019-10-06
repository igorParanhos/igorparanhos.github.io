<template>
  <input
    type="text"
    :class="`base-input
      ${fullwidth ? 'fullwidth' : ''}`"
    :value="value" :name="name"
    @change="$emit('change', $event.target.value)"
    />
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

  @Prop() private fullwidth!: string;
}
</script>

<style lang="scss">
.base-input {
  height: 48px;

  font-size: 16px;

  padding: 0 18px 0 18px;

  border-radius: 48px;
  border: 1px solid #cdcdcd;

  &.fullwidth {
    width: 100%;
  }
}
</style>