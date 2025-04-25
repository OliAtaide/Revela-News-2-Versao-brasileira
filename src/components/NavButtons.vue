<template>
  <div
    id="nav-buttons"
    class="container gap-3 my-3 d-flex justify-content-between"
  >
    <a href="" class="btn border-primary">
      <ImportIcon />
      Baixar Recursos
    </a>
    <a href="" class="btn border-primary">
      <LogoutIcon />
      Sair
    </a>
    <div class="ms-auto"></div>
    <router-link
      v-if="previousRoute"
      :to="previousRoute"
      class="btn border-primary"
    >
      <ArrowLeftIcon />
      Anterior
    </router-link>
    <router-link v-if="nextRoute" :to="nextRoute" class="btn btn-primary">
      Próximo
      <ArrowRightIcon />
    </router-link>
  </div>
</template>

<script setup>
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "@/icons/ArrowRightIcon.vue";
import ImportIcon from "@/icons/ImportIcon.vue";
import LogoutIcon from "@/icons/LogoutIcon.vue";
import { computed } from "vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const slides = router.getRoutes();

const currentIndex = computed(() =>
  slides.findIndex((r) => r.name === route.name)
);

// Get the left (previous) and right (next) routes
const previousRoute = computed(() =>
  currentIndex.value > 0 ? slides[currentIndex.value - 1] : null
);

const nextRoute = computed(() =>
  currentIndex.value < slides.length - 1 ? slides[currentIndex.value + 1] : null
);
</script>
