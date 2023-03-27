import type { Product } from '@/types/Product';
import { useLocalStorage, type RemovableRef } from '@vueuse/core';

export const shoppingCartStorage: RemovableRef<Product[]> = useLocalStorage('cart', []);
