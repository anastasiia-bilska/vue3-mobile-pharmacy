<script lang="ts">
export default {
  name: 'AppHubberBanner',
}
</script>

<template>
  <div class="container">
    <div class="hubber">
      <a
        class="hubber__link"
        aria-label="натисніть, щоб перейти на офіціний сайт Hubber"
        href="https://hubber.pro/"
        target="_blank"
      >
        <img
          class="hubber__logo"
          alt="Логотип компанії Hubber"
          src="https://hubber.pro/images/tild3363-3332-4865-a239-616364613334__svg_logo.svg"
        />
      </a>

      <p class="hubber__info">Опис товару на його характеристики розміщено платформою HUBBER</p>
    </div>
  </div>
</template>

<style lang="scss">
@import './AppHubberBanner.scss';
</style>
