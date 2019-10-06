<template>
  <button class="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  import { Component, Vue, Props } from 'vue-property-decorator';

  @Component()
  export default class extends Vue {}
</script>

<style lang="scss" scoped>
  .button {
    font-size: 22px;

    border: 0;
    border-radius: 5px;

    margin: 0;
    padding: 5px 30px 5px 30px;

    background: #efefef;
    box-shadow: #666 0 2px 2px;

    transition: all .2s ease;

    cursor: pointer;

    &:hover {
      box-shadow: #666 0 5px 5px;
    }
  }
</style>