<script lang="ts">
import SliderCardVue from '../Card/SliderCard.vue'
import products from '../../assets/api/products.json'

import type { Product } from '../../types/Product'

export default {
  name: 'AppSlider',
  components: {
    SliderCardVue
  },
  data() {
    return {
      products: products as Product[],
    }
  },
  computed: {
    preparedProducts(): Product[] {
      const sorted = this.products
        .slice()
        .sort((a: Product, b: Product) => {
          if (a.salePrice && !b.salePrice) {
          return -1;
        } else if (!a.salePrice && b.salePrice) {
          return 1;
        } else {
          if (a.isInStock && !b.isInStock) {
            return -1;
          } else if (!a.isInStock && b.isInStock) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      
      window.console.log(products)
      
      return sorted as Product[];
    }
  }
}
</script>

<template>
  <div class="slider">
    <div class="slider__header">
      <h1>Найчастіше купують</h1>

      <div class="slider__buttons">
        <button class="slider__button">
          <div class="slider__icon slider__icon--left"></div>
        </button>

        <button class="slider__button">
          <div class="slider__icon slider__icon--right"></div>
        </button>
      </div>
    </div>
    <div>
      <ul class="slider__list">
        <li v-for="product in preparedProducts" :key="product.id">
          <SliderCardVue :product="product" />
        </li>
      </ul>
      <!-- <SliderCardVue />
      <SliderCardVue /> -->
    </div>
  </div>
</template>

<style lang="scss">
@import './AppSlider.scss';
</style>

<!-- <template>
  <div class="slider">
    <div class="slides">
      <div class="slide" v-for="(image, index) in images" :key="index" :style="{ transform: 'translateX(' + offset + '%)' }">
        <img :src="image" alt="Slider Image" />
      </div>
    </div>
    <div class="controls">
      <button @click="prev" :disabled="currentIndex === 0">Prev</button>
      <button @click="next" :disabled="currentIndex === images.length - 1">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      images: [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
      ],
      currentIndex: 0,
      offset: 0,
    };
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.offset += 100;
      }
    },
    next() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.offset -= 100;
      }
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  display: flex;
}

.slide {
  flex: 1;
  transition: all 0.5s;
}

.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  margin: 0 10px;
}
</style> -->
