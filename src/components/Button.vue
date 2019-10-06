<template>
  <button
    :class="`button
      ${fullwidth ? 'fullwidth' : ''}
      ${rounded ? 'rounded' : ''}
      ${info ? 'info' : ''}
      ${danger ? 'danger' : ''}
      ${primary ? 'primary' : ''}
      ${success ? 'success' : ''}
      ${warning ? 'warning' : ''}
    `"
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() private fullwidth!: boolean;
  @Prop() private primary!: boolean;
  @Prop() private info!: boolean;
  @Prop() private danger!: boolean;
  @Prop() private warning!: boolean;
  @Prop() private success!: boolean;
  @Prop() private rounded!: boolean;
}

</script>

<style lang="scss" scoped>
.button {
  font-size: 22px;
  height: 48px;

  border: 0;
  border-radius: 5px;

  margin: 0;
  padding: 5px 30px 5px 30px;

  background: #efefef;
  box-shadow: #666 0 0px 14px -6px;

  transition: all .2s ease;

  cursor: pointer;

  &.fullwidth {
    width: 100%;
  }

  &.primary {
    background: #0077ff;
    color: #fff;
  }
  &.info {
    background: #f03930;
    color: #fff;
  }
  &.danger {
    background: #f03930;
    color: #fff;
  }
  &.warning {
    background: #f03930;
    color: #fff;
  }
  &.success {
    background: #f03930;
    color: #fff;
  }
  &.rounded {
    border-radius: 48px;
  }

  &:hover {
    box-shadow: #666 0 0px 20px -6px;
  }
}
</style>