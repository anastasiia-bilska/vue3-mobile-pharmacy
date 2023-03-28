<script lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppHubberBanner from '@/components/AppHubberBanner/AppHubberBanner.vue';
import AppNavigation from '@/components/AppNavigation/AppNavigation.vue';
import AppSlider from '@/components/Slider/AppSlider.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppSlider,
    AppHubberBanner,
    AppNavigation
  }
};
</script>

<template>
  <div class="home-page">
    <div class="page__wrapper--home">
    <AppHeader />
    <main class="page__main">
      <AppSlider />
      <AppHubberBanner />
    </main>
    <AppNavigation />
  </div>
  </div>
</template>

<style lang="scss">
.home-page {
  background-image: url('../assets/static/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
</style>
