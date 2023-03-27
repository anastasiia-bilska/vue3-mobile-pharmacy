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
    <AppHeader />
    <main>
      <AppSlider />
      <AppHubberBanner />
      <AppNavigation />
    </main>
  </div>
</template>

<style lang="scss">
.home-page {
  background-image: url('src/assets/static/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
</style>
