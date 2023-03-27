<script lang="ts">
export default {
  name: 'CartModal',
  props: {
    errorMessages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal">
      <h3 class="modal__title">Перевірте заповнені поля</h3>
      <h4 class="modal__subtitle">Будь ласка, зауважте, що:</h4>
      <div class="modal__messages">
        <p v-for="(message, index) in errorMessages" :key="index">{{ message }}</p>
      </div>
      <button @click="$emit('close')" class="modal__close">Закрити</button>
    </div>
  </div>
</template>

<style lang="scss">
@import './CartModal.scss';
</style>
