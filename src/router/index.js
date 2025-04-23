import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";

const routes = [
  {
    path: "/",
    name: "Visão Geral",
    component: HomeView,
    meta: {
      title: "Instruções do curso",
      text: "Você perceberá que é fácil compreender o passo a passo do curso, utilizando os botões indicados na parte superior esquerda da tela.",
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuView,
    meta: {
      title: "Menu do Curso",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
