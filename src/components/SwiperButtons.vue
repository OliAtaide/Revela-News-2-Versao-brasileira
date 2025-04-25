<script setup>
import { ref, onMounted } from "vue";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "@/icons/ArrowRightIcon.vue";

const isBeginning = ref(true);
const isEnd = ref(false);
let swiperEl;

const updateNavButtons = () => {
  isBeginning.value = swiperEl.swiper.isBeginning;
  isEnd.value = swiperEl.swiper.isEnd;
};

const slideNext = () => {
  swiperEl.swiper.slideNext();
};

const slidePrev = () => {
  swiperEl.swiper.slidePrev();
};

onMounted(() => {
  swiperEl = document.querySelector("swiper-container");

  swiperEl.addEventListener("swiperslidechange", updateNavButtons);

  // Ensure the state is set initially
  swiperEl.addEventListener("swiperinit", updateNavButtons);

  if (swiperEl.swiper) {
    updateNavButtons();
  }
});
</script>

<template>
  <div class="d-flex">
    <button
      v-if="!isBeginning"
      @click="slidePrev"
      class="btn btn-prev border-secondary"
    >
      <ArrowLeftIcon />
      Anterior
    </button>

    <button
      v-if="!isEnd"
      @click="slideNext"
      class="btn btn-next btn-secondary ms-auto"
    >
      Próximo
      <ArrowRightIcon />
    </button>
  </div>
</template>
