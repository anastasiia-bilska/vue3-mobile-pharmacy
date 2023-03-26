<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header class="header container">
    <img src="../../assets/static/logo.svg" alt="Логотип компанії Хапай" class="header__logo" />

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

    <button type="button" class="header__cart-button" aria-label="Натисніть, щоб відкрити кошик">
      <div class="header__icon header__icon--cart"></div>
    </button>
  </header>
</template>

<style lang="scss">
@import './AppHeader.scss';
</style>
