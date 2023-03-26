<script lang="ts">
import CartForm from '@/components/CartForm/CartForm.vue'
import CartHeader from '@/components/CartHeader/CartHeader.vue'

export default {
  components: {
    CartForm,
    CartHeader
  }
}
</script>

<template>
  <div class="cart-page">
    <CartHeader />
    <div class="container">
      <router-link
        class="cart-page__back"
        to="/"
        aria-label="натисніть, щоб повернутися на домашню сторінку"
      >
        <div class="cart-page__back-icon"></div>
        Кошик
      </router-link>

      <h1 class="cart-page__title">Оформлення замовлення</h1>

      <CartForm />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/sassStyles/colors';

.cart-page {
  &__back {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-bottom: 16px;

    width: fit-content;

    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: $color__secondary;
  }

  &__back-icon {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 4px;
    height: 8px;

    background-image: url('../assets/static/AppSlider/icon-left.svg');
  }

  &__title {
    margin-bottom: 24px;
    
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;text-align: center;
    color: $color__primary;
  }
}
</style>
