<script lang="ts">
import { shoppingCartStorage } from '@/storage/storage';
import { useShoppingCartStore } from '@/stores/cart';
import type { Product } from '@/types/Product';
import { ref } from 'vue';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner.vue';

export default {
  name: 'SliderCard',
  props: {
    product: {
      type: Object as () => Product,
      default: () => ({})
    }
  },
  setup() {
    const cartStore = useShoppingCartStore();
    shoppingCartStorage.value = cartStore.items;

    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    const addToCart = (product: Product) => {
      cartStore.addItem(product);
      shoppingCartStorage.value = cartStore.items;
    };
    const removeFromCart = (product: Product) => {
      cartStore.removeItem(product);
      shoppingCartStorage.value = cartStore.items;
    };
    return { addToCart, removeFromCart, isLoading };
  },
  computed: {
    isInLocalStorage() {
      return shoppingCartStorage.value.some((item) => item.id === this.product.id);
    }
  },
  components: { LoaderSpinner }
};
</script>

<template>
  <article class="card">
    <div class="card__loader" v-if="isLoading">
      <LoaderSpinner />
    </div>

    <div v-else class="card__content">
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

          <div v-show="product.isInStock">
            <button
              v-if="!isInLocalStorage"
              class="card__to-cart-button"
              @click="addToCart(product)"
            >
              <div class="card__cart-icon card__cart-icon--add"></div>
            </button>

            <button v-else class="card__to-cart-button" @click="removeFromCart(product)">
              <div class="card__cart-icon card__cart-icon--remove"></div>
            </button>
          </div>
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
    </div>
  </article>
</template>

<style lang="scss">
@import './SliderCard.scss';
</style>
