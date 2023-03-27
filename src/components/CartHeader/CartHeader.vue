<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartHeader'
});
</script>

<template>
  <header class="cart-header page__cart-header">
    <img src="../../assets/static/logo.svg" alt="Логотип компанії Хапай" class="header__logo" />
  </header>
</template>

<style lang="scss">
@import './CartHeader.scss';
</style>
