<script lang="ts">
import { useShoppingCartStore } from '@/stores/cart';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartFooter',
  setup() {
    const store = useShoppingCartStore();

    let sum = 0;
    store.items.forEach((item) => {
      if (item.salePrice) {
        sum += item.salePrice;
      } else {
        sum += item.price;
      }
    });

    sum = Math.round(sum * 100) / 100;

    const amount = store.items.length;

    return {
      sum,
      amount
    };
  }
});
</script>

<template>
  <footer v-show="amount" class="footer">
    <p class="footer__to-pay">
      Всього до сплати:
      <strong class="footer__to-pay">{{ sum }}<span class="footer__ua">грн</span></strong>
    </p>
    <p v-if="amount === 1" class="footer__amount">В кошику 1 товар</p>
    <p v-else-if="amount > 1 && amount < 5" class="footer__amount">В кошику {{ amount }} товари</p>
    <p v-else class="footer__amount">В кошику {{ amount }} товарів</p>

    <button class="footer__button" form="cart-form" type="submit">Підтверджую замовлення</button>
  </footer>
</template>

<style lang="scss">
@import './CartFooter.scss';
</style>
