<script lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppSlider from './components/Slider/AppSlider.vue'

export default {
  components: {
    AppHeader,
    AppSlider
  }
}
</script>

<template>
  <AppHeader />
  <main class="container">
    <AppSlider />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@import './assets/main.scss';
</style>
