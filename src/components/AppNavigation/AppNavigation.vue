<script lang="ts">
import ModalWindow from '../ModalWindow/ModalWindow.vue';

export default {
  name: 'AppNavigation',
  components: { ModalWindow },
  data() {
    return {
      isCatalogOpen: false,
      isCabinetOpen: false
    };
  },
  methods: {
    openCatalogModal() {
      this.isCatalogOpen = true;
    },
    openCabinetModal() {
      this.isCabinetOpen = true;
    },
    closeModal() {
      this.isCatalogOpen = false;
      this.isCabinetOpen = false;
    }
  }
};
</script>

<template>
  <div class="container container__navigation">
    <nav class="navigation page__navigation">
      <button type="button" @click="openCatalogModal" class="navigation__link">
        <div class="navigation__icon navigation__icon--catalog"></div>
        Каталог
      </button>
      <button  type="button" @click="openCabinetModal" class="navigation__link">
        <div class="navigation__icon navigation__icon--me"></div>
        Kабінет
      </button>
      <div class="navigation__separator"></div>
    </nav>
    <ModalWindow v-show="isCabinetOpen || isCatalogOpen">
      <div>
        <h3 class="modal__nav" v-if="isCabinetOpen">Цe кабінет!</h3>
        <h3 class="modal__nav" v-if="isCatalogOpen">Це каталог!</h3>
        <button @click="closeModal" class="modal__close">ок</button>
      </div>
    </ModalWindow>
  </div>
</template>

<style lang="scss">
@import './AppNavigation.scss';
</style>
