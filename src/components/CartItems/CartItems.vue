<script lang="ts">
import { useShoppingCartStore } from '@/stores/cart';
import { defineComponent, ref } from 'vue';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner.vue';

export default defineComponent({
  name: 'CartItems',
  setup() {
    const cartStore = useShoppingCartStore();
    const isLoading = ref(true);

    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    return {
      cartStore,
      isLoading
    };
  },
  components: { LoaderSpinner }
});
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
          <div v-if="isLoading" class="cart-items__spinner">
            <LoaderSpinner />
          </div>
          <div v-else class="cart-items__content">
            <img class="cart-items__item-img" :src="product.image" :alt="product.name" />
            <div class="cart-items__item-info">
              <h4 class="cart-items__item-title">{{ product.name }}</h4>
              <div class="cart-items__item-details">
                <p class="cart-items__item-price">
                  {{ product.price }} <span class="cart-items__item-uan">грн</span>
                </p>
                <p class="cart-items__item-amount">1 шт</p>
              </div>
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
