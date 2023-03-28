<script lang="ts">
import { useShoppingCartStore } from '@/stores/cart';

export default {
  name: 'AppHeader',
  setup() {
    const cartStore = useShoppingCartStore();
    return { cartStore };
  }
};
</script>

<template>
  <header class="header page__header">
    <img src="../../assets/static/logo.png" alt="Логотип компанії Хапай" class="header__logo" />

    <form class="header__form">
      <input class="header__search-bar" type="text" placeholder="Пошук" />

      <button
        type="submit"
        class="header__search-button"
        aria-label="Натисніть, щоб розпочати пошук товару"
      >
        <div class="header__icon header__icon--search"></div>
      </button>
    </form>

    <router-link
      type="button"
      class="header__cart-button"
      aria-label="Натисніть, щоб відкрити кошик"
      to="/cart"
    >
      <div class="header__icon header__icon--cart"></div>
      <div
        v-show="cartStore.items.length"
        class="header__cart-counter"
        :class="{'header__cart-counter--big': cartStore.items.length > 9}"
      >
        {{ cartStore.items.length }}
      </div>
    </router-link>
  </header>
</template>

<style lang="scss">
@import './AppHeader.scss';
</style>
