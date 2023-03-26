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
      slides: [] as Product[][],
      activeSlide: 0
    }
  },
  methods: {
    createSlides() {
      const totalSlides = Math.ceil(this.preparedProducts.length / 4)
      for (let i = 0; i < totalSlides; i++) {
        this.slides.push(this.preparedProducts.slice(i * 4, i * 4 + 4))
      }
      return this.slides
    },
    moveForward() {
      if (this.activeSlide < this.slides.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },
    moveBack() {
      if (this.activeSlide > 0) {
        this.activeSlide--
      } else {
        this.activeSlide = this.slides.length - 1
      }
    },
    changeSlide(wantedSlide: number) {
      this.activeSlide = wantedSlide;
    }
  },
  mounted() {
    this.slides = this.createSlides()
  },
  computed: {
    preparedProducts(): Product[] {
      const sorted = this.products.slice().sort((a: Product, b: Product) => {
        if (a.salePrice && !b.salePrice) {
          return -1
        } else if (!a.salePrice && b.salePrice) {
          return 1
        } else {
          if (a.isInStock && !b.isInStock) {
            return -1
          } else if (!a.isInStock && b.isInStock) {
            return 1
          } else {
            return 0
          }
        }
      })

      window.console.log(products)

      return sorted as Product[]
    }
  }
}
</script>

<template>
  <div class="slider page__slider">
    <div class="slider__header container">
      <h1 class="slider__title">Найчастіше купують</h1>

      <div class="slider__buttons">
        <button class="slider__button" @click="moveBack">
          <div class="slider__icon slider__icon--left"></div>
        </button>

        <button class="slider__button" @click="moveForward">
          <div class="slider__icon slider__icon--right"></div>
        </button>
      </div>
    </div>

    <div class="container">
      <div class="slider__slides" ref="slides">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slider__slide"
          :class="{ 'slider__slide--active': activeSlide === index }"
          :style="{ transform: `translateX(calc(-${activeSlide} * (100% + 16px)))` }"
        >
          <div class="slider__item" v-for="product in slide" :key="product.id">
            <SliderCardVue :product="product" />
          </div>
        </div>
      </div>
    </div>

    <div class="slider__dots">
      <button
        v-for="(slide, index) in slides" :key="index"
        class="slider__dot"
        :class="{'slider__dot--active': index === activeSlide }"
        @click="changeSlide(index)"
      >
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import './AppSlider.scss';
</style>
