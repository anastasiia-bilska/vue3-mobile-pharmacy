import type { Product } from '@/types/Product';
import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Product[]
  }),
  getters: {
    itemsByProducer(): Record<string, Product[]> {
      return this.items.reduce((result: Record<string, Product[]>, product) => {
        if (!result[product.producer]) {
          result[product.producer] = [];
        }
        result[product.producer].push(product);
        return result;
      }, {});
    }
  },
  actions: {
    addItem(item: Product) {
      this.items.push(item);
    },
    removeItem(item: Product) {
      const index = this.items.findIndex((good) => good.id === item.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    clearCart() {
      this.items = [];
    }
  }
});
