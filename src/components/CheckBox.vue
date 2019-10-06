<template>
  <div class="container">
    <div class="">
      <input type="checkbox" :checked="checked">
      <span class="checkmark">
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CheckBox extends Vue {
  @Prop() private checked!: boolean;


}
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  position: relative;
  // padding-left: 35px;

  width: 35px;
  height: 35px;

  cursor: pointer;

  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border-radius: 5px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;

  cursor: pointer;
  height: 30px;
  width: 30px;
  border: 0;
  margin: 0;
  padding: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #eee;
  border-radius: 5px;
  pointer-events: none;
  transition: all .2s ease;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 10px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>