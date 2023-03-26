<script lang="ts">
export default {
  name: 'CartForm'
}
</script>

<template>
  <div class="cart-form">
    <h2 class="cart-form__title">Контактні дані</h2>

    <form class="cart-form__contacts">
      <ul>
        <li>
          <label class="cart-form__label" for="name"
            >Ім’я <span class="cart-form__req">*</span></label
          >
          <input class="cart-form__input" id="name" type="input" placeholder="Введіть ваше ім’я" />
        </li>
      </ul>
    </form>
  </div>
</template>

<style lang="scss">
@import './CartForm.scss';
</style>
