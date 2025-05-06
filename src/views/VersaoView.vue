<script setup>
import SwiperButtons from "@/components/SwiperButtons.vue";
import ImportIcon from "@/icons/ImportIcon.vue";
</script>

<template>
  <swiper-container>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          Ao final do processo, encaminhamos todos os passos realizados ao Royal
          College of Physicians, bem como nossa versão final. A disponibilização
          dessa versão só se deu após aprovação de todas as etapas, seguindo o
          passo final da metodologia de adaptação transcultural. Agora você vai
          conhecer como é a versão brasileira do NEWS 2.
        </div>
        <img class="img-fluid" src="@/assets/imgs/vf0.jpg" alt="" />
        <div class="alert feedback mb-3">
          Agora que já conhecemos todo o processo de adaptação transcultural,
          iremos conhecer a versão final do NEWS 2 – versão brasileira. A
          próxima tela é o seguimento da apresentação da Versão Final. Para
          seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          Essa é a versão brasileira do NEWS 2, ou seja, o NEWS 2 - versão
          brasileira. Os itens foram descritos como você já conhece e adaptados
          transculturalmente para Frequência respiratória (por minuto),
          saturação de oxigênio (escala 1 e escala 2), Uso de oxigênio auxiliar
          através do questionamento “Ar ambiente ou oxigênio?”, Pressão arterial
          sistólica (milímetros de mercúrio), Pulso (por minuto), Consciência e
          Temperatura.
        </div>
        <img class="img-fluid" src="@/assets/imgs/vf1.jpg" alt="" />
        <div class="alert feedback mb-3">
          Agora, a partir do valor obtido de NEWS 2 - versão brasileira para
          esse paciente, iremos conhecer a descrição da resposta clínica dos
          desencadeadores. Assim, você saberá qual ação deve tomar, conforme a
          pontuação. A próxima tela é o seguimento da apresentação da Versão
          Final. Para seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          O outro item adaptado foi a “Descrição da resposta clínica dos
          desencadeadores do NEWS 2 - versão brasileira”. Aqui você pode pautar
          sua tomada de decisão frente ao valor de NEWS 2 - versão brasileira
          encontrado. Perceba que as orientações vão desde a manutenção da
          rotina de monitoramento do NEWS 2 até a indicação de transferência
          para uma unidade com instalações de monitoramento como uma unidade de
          terapia intensiva.
        </div>
        <img class="img-fluid" src="@/assets/imgs/vf2.jpg" alt="" />
        <div class="alert feedback mb-3">
          Por fim, apresentamos a você um instrumento de apoio semelhante a uma
          folha de registro de sinais vitais, na qual você pode registrar os
          itens do NEWS 2 - versão brasileira e calculá-lo. A próxima tela é o
          seguimento da apresentação da Versão Final. Para seguir, clique em
          "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          Por fim, adaptamos também, como ferramenta de apoio, o quadro de
          observações do NEWS 2 - versão brasileira.
        </div>
        <img class="img-fluid" src="@/assets/imgs/vf3.jpg" alt="" />
        <div class="alert feedback mb-3">
          Agora que você já conhece a escala na versão brasileira e o material
          de apoio, disponibilizamos o link para que você possa ler o artigo
          original de adaptação transcultural e aprofundar seu conhecimento.
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
  <SwiperButtons />
</template>
