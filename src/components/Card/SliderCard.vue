<script lang="ts">
import { shoppingCartStorage } from '@/storage/storage'
import { useShoppingCartStore } from '@/stores/cart'
import type { Product } from '@/types/Product'

export default {
  name: 'SliderCard',
  props: {
    product: {
      type: Object as () => Product,
      default: () => ({})
    }
  },
  setup() {
    const cartStore = useShoppingCartStore()

    shoppingCartStorage.value = cartStore.items

    const addToCart = (product: Product) => {
      cartStore.addItem(product)
      shoppingCartStorage.value = cartStore.items
    }

    const removeFromCart = (product: Product) => {
      cartStore.removeItem(product)
      shoppingCartStorage.value = cartStore.items
    }

    return { addToCart, removeFromCart }
  },
  computed: {
    isInLocalStorage() {
      return shoppingCartStorage.value.some((item) => item.id === this.product.id)
    }
  }
}
</script>

<template>
  <article class="card">
    <div class="card__preview">
      <img class="card__image" :alt="product.name" :src="product.image" />
      <h2 class="card__title">{{ product.name }}</h2>
    </div>

    <div class="card__info">
      <div class="card__purchase">
        <div class="card__prices">
          <p class="card__price-old" :class="{ 'card__price-old--hidden': !product.salePrice }">
            {{ product.salePrice ? product.price : product.salePrice }} грн
          </p>

          <p
            class="card__price-current"
            :class="{ 'card__price-current--on-sale': product.salePrice }"
          >
            <strong class="card__price-current-number">{{
              product.salePrice ? product.salePrice : product.price
            }}</strong>
            грн
          </p>
        </div>

        <button v-if="!isInLocalStorage" class="card__to-cart-button" @click="addToCart(product)">
          <div class="card__cart-icon card__cart-icon--add"></div>
        </button>

        <button v-else class="card__to-cart-button" @click="removeFromCart(product)">
          <div class="card__cart-icon card__cart-icon--remove"></div>
        </button>
      </div>

      <p
        class="card__status"
        :class="{
          'card__status--positive': product.isInStock,
          'card__status--negative': !product.isInStock
        }"
      >
        {{ product.isInStock ? 'Є в наявності' : 'Немає в наявності' }}
      </p>
    </div>
  </article>
</template>

<style lang="scss">
@import './SliderCard.scss';
</style>
