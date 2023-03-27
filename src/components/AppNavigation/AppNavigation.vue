<script lang="ts">
import ModalWindow from '../ModalWindow/ModalWindow.vue';

export default {
  name: 'AppNavigation',
  components: { ModalWindow },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<template>
  <div class="container container__navigation">
    <nav class="navigation page__navigation">
      <button type="button" @click="openModal" class="navigation__link">
        <div class="navigation__icon navigation__icon--catalog"></div>
        Каталог
      </button>
      <button type="button" @click="openModal" class="navigation__link">
        <div class="navigation__icon navigation__icon--me"></div>
        Kабінет
      </button>
      <div class="navigation__separator"></div>
    </nav>
    <ModalWindow v-show="isModalOpen">
      <img class="modal__logo" src="../../assets/static/logo.svg" alt="Логотип компанії 'Хапай'" />
      <p class="modal__text">
        Соцмережа постачальників та покупців для покупки товарів та обміну відгуками:
      </p>
      <ul class="modal__list">
        <li class="modal__list-item">1 000 000+ доступних товарів в каталозі</li>
        <li class="modal__list-item">пошук серед товарів у наявності</li>
        <li class="modal__list-item">перевірені постачальники товарів в Україні.</li>
      </ul>
      <p class="modal__text modal__text--last">
        Залиште ваш відгук
        <a
          href="https://forms.gle/CKuK2yKpvPXbTLVQ9"
          class="modal__link"
          target="_blank"
          title="Опитування у Google Forms"
          aria-label="Опитування у Google Forms"
        >
          https://forms.gle/CKuK2yKpvPXbTLVQ9
        </a>
      </p>
      <button @click="closeModal" class="modal__close">Ок</button>
    </ModalWindow>
  </div>
</template>

<style lang="scss">
@import './AppNavigation.scss';
</style>
