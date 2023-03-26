<script lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppBanner from './components/HubberBanner/HubberBanner.vue';
import AppSlider from './components/Slider/AppSlider.vue'

export default {
  components: {
    AppHeader,
    AppSlider,
    AppBanner
}
}
</script>

<template>
  <AppHeader />
  <main>
    <AppSlider />
    <AppBanner />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@import '../main.scss';
</style>
