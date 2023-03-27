<script lang="ts">
import { defineComponent } from 'vue';
import ModalWindow from '../src/components/ModalWindow/ModalWindow.vue';

export default defineComponent({
  name: 'App',
  components: {
    ModalWindow
  },
  data() {
    return {
      visited: false,
      showModal: false
    };
  },
  mounted() {
    const visited = localStorage.getItem('visited');
    if (visited) {
      this.visited = true;
    } else {
      localStorage.setItem('visited', 'true');
      setTimeout(() => {
        this.showModal = true;
      }, 3000);
    }
  },
  methods: {
    onModalClose() {
      this.visited = true;
      this.showModal = false;
    }
  }
});
</script>

<template>
  <div>
    <router-view />
  </div>

  <div v-if="showModal">
    <ModalWindow>
      <img class="modal__logo" src="./assets/static/logo.svg" alt="Логотип компанії 'Хапай'" />
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
      <button @click="onModalClose" class="modal__close">Ок</button>
    </ModalWindow>
  </div>
</template>

<style lang="scss">
@import '../main.scss';
</style>
