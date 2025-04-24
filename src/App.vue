<template>
  <header>
    <HeaderView />
  </header>
  <main>
    <h2>UNIDADE 3 - NEWS 2 - VERSÃO BRASILEIRA</h2>
    <div class="container container-main">
      <h1>
        {{ route.meta.title }}
      </h1>
      <p>
        {{ route.meta.text }}
      </p>
      <NavRoutes />
      <router-view />
    </div>
    <NavButtons />
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router";
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
import NavButtons from "./components/NavButtons.vue";
import NavRoutes from "./components/NavRoutes.vue";
import { register } from 'swiper/element/bundle';

register();
const route = useRoute();
</script>

<style lang="scss" src="@/assets/style.scss"></style>
