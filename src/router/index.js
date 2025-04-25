import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import TraducoesView from "@/views/TraducoesView.vue";
import ComiteView from "@/views/ComiteView.vue";
import TesteView from "@/views/TesteView.vue";
import VersaoView from "@/views/VersaoView.vue";
import ArtigoView from "@/views/ArtigoView.vue";
import EndView from "@/views/EndView.vue";

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
    path: "/traducoes",
    name: "Traduções",
    component: TraducoesView,
    meta: {
      title: "Traduções",
    },
  },
  {
    path: "/comite",
    name: "Comitê de Especialistas",
    component: ComiteView,
    meta: {
      title: "Comitê de Especialistas",
    },
  },
  {
    path: "/teste",
    name: "Teste Piloto",
    component: TesteView,
    meta: {
      title: "Teste Piloto",
    },
  },
  {
    path: "/versao-final",
    name: "Versão Final",
    component: VersaoView,
    meta: {
      title: "Versão Final",
    },
  },
  {
    path: "/artigo",
    name: "Artigo",
    component: ArtigoView,
    meta: {
      title: "Artigo",
    },
  },
  {
    path: "/end",
    name: "Finalização",
    component: EndView,
    meta: {
      title: "Finalização",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
