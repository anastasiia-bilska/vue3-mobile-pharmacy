<script lang="ts">
import router from '@/router'
import { useShoppingCartStore } from '@/stores/cart'
import CartModal from '../CartModal/CartModal.vue'

export default {
  name: 'CartForm',
  data() {
    return {
      hasErrorName: false,
      hasErrorSurname: false,
      hasErrorTel: false,
      errorMessages: [] as String[],
      isModalVisible: false
    }
  },
  methods: {
    handleSubmit(event: Event) {
      event.preventDefault()
      this.errorMessages = []
      this.hasErrorName = false
      this.hasErrorSurname = false
      this.hasErrorTel = false

      const nameInput = document.getElementById('name') as HTMLInputElement
      const surnameInput = document.getElementById('surname') as HTMLInputElement
      const telInput = document.getElementById('tel') as HTMLInputElement

      if (!nameInput.checkValidity()) {
        this.errorMessages = [...this.errorMessages, 'Ім’я має містити лише кирилицю']
        this.hasErrorName = true
      }
      if (!surnameInput.checkValidity()) {
        this.errorMessages = [...this.errorMessages, 'Прізвище має містити лише кирилицю']
        this.hasErrorSurname = true
      }
      if (!telInput.checkValidity()) {
        this.errorMessages = [
          ...this.errorMessages,
          'Номер телефону повинен бути у форматі 0XXYYYYYYY або +38XXYYYYYYY'
        ]
        this.hasErrorTel = true
      }

      if (this.errorMessages.length) {
        this.showModal()
      } else {
        const cart = useShoppingCartStore();
        cart.clearCart();
        router.push('/');
      }
    },
    showModal() {
      this.isModalVisible = true
    },
    hideModal() {
      this.isModalVisible = false
    }
  },
  components: {
    CartModal
  }
}
</script>

<template>
  <div class="cart-form page__cart-form">
    <h2 class="cart-form__title">Контактні дані</h2>

    <form
      id="cart-form"
      class="cart-form__contacts"
      @submit="($event) => handleSubmit($event)"
      novalidate
    >
      <ul class="cart-form__list">
        <li>
          <label class="cart-form__label" for="name"
            >Ім’я <span class="cart-form__req">*</span></label
          >
          <input
            :class="{ 'cart-form__input--error': hasErrorName }"
            class="cart-form__input"
            id="name"
            type="input"
            placeholder="Введіть ваше ім’я"
            pattern="[А-Яа-яІіЇїЄєҐґ]{2,20}"
            required
          />
        </li>

        <li>
          <label class="cart-form__label" for="surname"
            >Прізвище <span class="cart-form__req">*</span></label
          >
          <input
            :class="{ 'cart-form__input--error': hasErrorSurname }"
            class="cart-form__input"
            id="surname"
            type="input"
            placeholder="Введіть ваше прізвище"
            pattern="?[А-Яа-яІіЇїЄєҐґ]+(-[А-Яа-яІіЇїЄєҐґ]+)"
            required
          />
        </li>

        <li>
          <label class="cart-form__label" for="tel"
            >Номер телефону <span class="cart-form__req">*</span></label
          >
          <input
            :class="{ 'cart-form__input--error': hasErrorTel }"
            class="cart-form__input"
            id="tel"
            type="tel"
            placeholder="Введіть ваш номер телефону"
            pattern="^(?:\+38)?(?:0(?:[0-9]{2}))?[0-9]{7}$"
            required
          />
        </li>

        <li>
          <label class="cart-form__label" for="email">Email</label>
          <input class="cart-form__input" id="email" type="email" placeholder="Введіть ваш email" />
        </li>

        <li>
          <label class="cart-form__label" for="text-cart">Email</label>
          <textarea class="cart-form__input cart-form__input--text-area" name="comments" id="text-cart" cols="30" rows="10" placeholder="Напишіть свій коментар до замовлення"></textarea>
        </li>
      </ul>
    </form>

    <CartModal v-if="isModalVisible" :errorMessages="errorMessages" @close="hideModal" />
  </div>
</template>

<style lang="scss">
@import './CartForm.scss';
</style>
