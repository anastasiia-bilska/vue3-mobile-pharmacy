<script lang="ts">
export default {
  name: 'ModalWindow',
  props: {
    errorMessages: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import './ModalWindow.scss';
</style>
