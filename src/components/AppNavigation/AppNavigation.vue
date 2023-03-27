<script lang="ts">
export default {
  name: 'AppNavigation'
};
</script>

<template>
  <div class="container container__navigation">
    <nav class="navigation page__navigation">
      <a class="navigation__link" href="#catalog">
        <div class="navigation__icon navigation__icon--catalog"></div>
        Каталог
      </a>
      <a class="navigation__link" href="#cabinet">
        <div class="navigation__icon navigation__icon--me"></div>
        Kабінет
      </a>
      <div class="navigation__separator"></div>
    </nav>
  </div>
</template>

<style lang="scss">
@import './AppNavigation.scss';
</style>
