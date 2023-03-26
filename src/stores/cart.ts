import type { Product } from '@/types/Product'
import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Product[]
  }),
  actions: {
    addItem(item: Product) {
      this.items.push(item)
    },
    removeItem(item: Product) {
      const index = this.items.findIndex((good) => good.id === item.id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    }
  }
})
