<script lang="ts">
import { defineComponent } from 'vue';
import SliderCardVue from '../Card/SliderCard.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import products from '../../assets/api/products.json';

import type { Product } from '@/types/Product';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'AppSlider',
  components: {
    Swiper,
    SwiperSlide,
    SliderCardVue
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      products: products,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 8
      }
    };
  },
  methods: {
    chunk(arr: any[], size: number) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );
    }
  },
  computed: {
    slidesPerView() {
      const height = window.innerHeight;
      if (height >= 800) {
        return 4;
      }
      return 2;
    },
    spaceBetween() {
      const height = window.innerHeight;
      if (height >= 800) {
        return 16;
      }
      return 8;
    },
    groupedProducts() {
      const sorted = this.products.slice().sort((a: Product, b: Product) => {
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

      if (window.innerHeight >= 800) {
        return this.chunk(sorted, 4);
      } else {
        return this.chunk(sorted, 2);
      }
    }
  }
});
</script>

<template>
  <div class="container slider__container">
    <h1 class="slider__title">Найчастіше купують</h1>
    <swiper
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :slides-per-view="1"
      :spaceBetween="spaceBetween"
      :pagination="{ clickable: true }"
      :modules="modules"
      style="padding-top: 54px"
    >
      <div class="swiper-button-prev">
        <div class="slider__icon slider__icon--left"></div>
      </div>
      <div class="swiper-button-next">
        <div class="slider__icon slider__icon--right"></div>
      </div>
      <swiper-slide v-for="(group, index) in groupedProducts" :key="index">
        <div class="slider__grid">
          <SliderCardVue v-for="(product, index) in group" :key="index" :product="product" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
@import './AppSlider.scss';
@import '../../assets/sassStyles/mixins';
@import '../../assets/sassStyles/colors';

.swiper-button-prev,
.swiper-button-next {
  content: '';
  top: 22px;
  height: 38px;
  width: 38px;

  background-color: $color__main;
  border-radius: 40px;
  opacity: 1;
  box-shadow: 0px 4px 15px rgba(22, 25, 31, 0.1);
}

.swiper-button-prev {
  right: 42px;
  left: auto;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 1;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
}

.swiper-pagination {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 16px;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0;
}

.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background-color: $color__main;
  opacity: 1;
  margin: 0;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 8px;
  height: 8px;
  background-color: $color__background;
}

.swiper-pagination {
  position: static;
}
</style>
