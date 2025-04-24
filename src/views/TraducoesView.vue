<script setup>
import SwiperButtons from "@/components/SwiperButtons.vue";
</script>

<template>
  <swiper-container>
    <swiper-slide>
      <div class="alert text mb-3">
        Instrumentos de saúde são utilizados em diversas línguas e culturas e,
        para que apresentem o mesmo valor, é imprescindível que se realize a
        tradução do ponto de vista linguístico e sua adequação à cultura do
        local onde será aplicada (BEATON et al, 2007). Em alguns casos, uma
        escala passa por uma transformação muito grande, sendo realizada a
        tradução a uma língua diferente da que foi proposta inicialmente e,
        também, aplicação em uma população diferente do original, como é o caso
        da NEWS 2 e seu uso no Brasil. Assim, é importante você saber que essa
        foi a metodologia usada e apresentaremos a seguir. Você pode clicar em
        “próximo slide” para conhecer cada item.
      </div>
      <img class="img-fluid" src="@/assets/imgs/traducoes.jpg" alt="" />
      <div class="alert feedback mb-3">
        A próxima tela é o seguimento da apresentação das Traduções. Para
        seguir, clique em "Próximo slide".
      </div>
    </swiper-slide>
    <swiper-slide>
      <img class="img-fluid" src="@/assets/imgs/traducao1.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="img-fluid" src="@/assets/imgs/traducao2.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="img-fluid" src="@/assets/imgs/traducao4.jpg" alt="" />
    </swiper-slide>
  </swiper-container>
  <SwiperButtons />
</template>
