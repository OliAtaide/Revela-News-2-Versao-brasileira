<script setup>
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "@/icons/ArrowRightIcon.vue";

const swiperEl = document.querySelector("swiper-container");
const swiper = swiperEl.swiper;

const slideNext = () => {
  swiperEl.swiper.slideNext();
};

const slidePrev = () => {
  swiperEl.swiper.slidePrev();
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <button
      @click="slidePrev"
      v-if="!swiper.isBeginning"
      class="btn btn-prev border-secondary"
    >
      <ArrowLeftIcon />
      Anterior
    </button>
    <button @click="slideNext()" class="btn btn-next btn-secondary">
      Próximo
      <ArrowRightIcon />
    </button>
  </div>
</template>
