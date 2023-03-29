<script lang="ts">
import CartFooter from '@/components/CartFooter/CartFooter.vue';
import CartForm from '@/components/CartForm/CartForm.vue';
import CartHeader from '@/components/CartHeader/CartHeader.vue';
import CartItems from '@/components/CartItems/CartItems.vue';
import { useShoppingCartStore } from '@/stores/cart';

export default {
  components: {
    CartForm,
    CartHeader,
    CartItems,
    CartFooter
  },
  computed: {
    hasItems() {
      const cart = useShoppingCartStore();

      return cart.items.length;
    }
  }
};
</script>

<template>
  <div class="cart-page">
    <CartHeader />
    <div class="container cart-bage__body">
      <div class="cart-page__content">
        <router-link
          class="cart-page__back"
          to="/"
          aria-label="натисніть, щоб повернутися на домашню сторінку"
        >
          <div class="cart-page__back-icon"></div>
          Кошик
        </router-link>
        <div v-if="hasItems">
          <h1 class="cart-page__title">Оформлення замовлення</h1>

          <CartForm />
          <CartItems />
          <CartFooter />
        </div>
        <h1 v-else class="cart-page__title">Кошик порожній</h1>
      </div>
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
    line-height: 120%;
    color: $color__primary;
  }

  &__body {
    position: relative;
    min-height: calc(100vh + 160px);
  }

  &__content {
    padding-bottom: 180px;
  }
}
</style>
