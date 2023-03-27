<script lang="ts">
export default {
  name: 'LoaderSpinner'
};
</script>

<template>
  <div class="loader-spinner"></div>
</template>

<style lang="scss">
@import '../../assets/sassStyles/colors';

.loader-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid hsla(211, 70%, 33%, 0.2);
  border-top-color: $color__background;
  border-radius: 50%;
  animation: spin 0.3s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
