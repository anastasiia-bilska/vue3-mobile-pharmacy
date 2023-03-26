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
  <main>
    <AppSlider />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@import '../main.scss';
</style>
