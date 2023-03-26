<script lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppHubberBanner from './components/AppHubberBanner/AppHubberBanner.vue'
import AppNavigation from './components/AppNavigation/AppNavigation.vue';
import AppSlider from './components/Slider/AppSlider.vue'

export default {
  components: {
    AppHeader,
    AppSlider,
    AppHubberBanner,
    AppNavigation
}
}
</script>

<template>
  <AppHeader />
  <main>
    <AppSlider />
    <AppHubberBanner />
    <AppNavigation />
  </main>
</template>

<style lang="scss">
@import '../main.scss';
</style>
