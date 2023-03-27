<script lang="ts">
import { useShoppingCartStore } from '@/stores/cart'

export default {
  name: 'CartItems',
  setup() {
    const cartStore = useShoppingCartStore()

    return {
      cartStore
    }
  }
}
</script>

<template>
  <div class="cart-items">
    <section
      class="cart-items__group"
      v-for="(products, producer) in cartStore.itemsByProducer"
      :key="producer"
    >
      <h3 class="cart-items__group-title">
        Постачальник: <span class="cart-items__producer">{{ producer }}</span>
      </h3>
      <ul class="cart-items__list">
        <li class="cart-items__item" v-for="product in products" :key="product.id">
          <img class="cart-items__item-img" :src="product.image" :alt="product.name" />
          <div class="cart-items__item-info">
            <h4 class="cart-items__item-title">{{ product.name }}</h4>
            <div class="cart-items__item-details">
              <p class="cart-items__item-price">{{ product.price }} <span class="cart-items__item-uan">грн</span></p>
              <p class="cart-items__item-amount">1 шт</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
@import './CartItems.scss';
</style>
