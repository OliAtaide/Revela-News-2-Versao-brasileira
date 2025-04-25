<template>
  <ul class="nav">
    <li class="nav-item" v-for="(r, i) in slides" :key="i">
      <router-link :to="`${r.path}`" class="nav-link" aria-current="page">
        <div class="number">
          <CheckIcon />
          <span>
            {{ i + 1 }}
          </span>
        </div>
        {{ r.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import CheckIcon from "@/icons/CheckIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const slides = router.getRoutes();
</script>
