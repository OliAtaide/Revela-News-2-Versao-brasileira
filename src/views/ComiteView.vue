<script setup>
import SwiperButtons from "@/components/SwiperButtons.vue";
</script>

<template>
  <swiper-container>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          Em relação ao Comitê de Especialistas, esse foi realizado de maneira
          on-line, e contou com 18 profissionais (11 enfermeiros e 7 médicos).
          Em relação ao local de atuação, houve representantes de 11 cidades
          brasileiras, incluindo o estados do Rio Grande do Sul, Santa Catarina,
          Paraná, Goiás, Rio de Janeiro, São Paulo, Maranhão, Piauí e Ceará. Os
          profissionais eram envolvidos em docência, assistência e gestão.
        </div>
        <img class="img-fluid" src="@/assets/imgs/comite0.jpg" alt="" />
        <div class="alert feedback mb-3">
          A próxima tela é o seguimento da apresentação do Comitê de
          Especialistas. Para seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          <div class="mb-3">
            Você sabia que os especialistas analisaram todos os itens
            apresentados baseados em sua tradução inicial, síntese das
            traduções, tradução reversa e versão final, analisando as seguintes
            equivalências? Vamos explicar um pouco sobre cada uma:
          </div>

          <ul class="d-flex flex-column gap-3 m-0">
            <li>
              Semântica está relacionada ao significado das palavras, devendo
              ser evitadas as palavras que possuam mais de um significado e que
              possam gerar quaisquer dificuldades para compreensão do item
              descrito.
            </li>
            <li>
              Idiomática faz referência às expressões e coloquialismos
              utilizados com frequência no cotidiano, podendo apresentar
              dificuldades para serem traduzidas, já que não possuem, na maioria
              dos casos, equivalentes exatos em outras culturas e línguas.
            </li>
            <li>
              Experimental se relaciona com as experiências vividas, em que a
              escala será aplicada, podendo ser diferentes das observadas na
              origem, devendo ser substituídas por atividades semelhantes,
              realizadas no local onde será proposta a tradução.
            </li>
            <li>
              Conceitual está ligada ao fato de que algumas palavras possuem
              significados diferentes em relação a sua cultura.
            </li>
          </ul>
        </div>
        <img class="img-fluid" src="@/assets/imgs/comite1.jpg" alt="" />
        <div class="alert feedback mb-3">
          A próxima tela é o seguimento da apresentação do Comitê de
          Especialistas. Para seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          Através de uma Escala do tipo Likert (1= não equivalente, 2=
          impossível avaliar a equivalência sem que o item seja revisto, 3=
          equivalente, mas necessita de alterações menores e 4= absolutamente
          equivalente) os itens foram avaliados.
        </div>
        <img class="img-fluid" src="@/assets/imgs/comite2.jpg" alt="" />
        <div class="alert feedback mb-3">
          A próxima tela é o seguimento da apresentação do Comitê de
          Especialistas. Para seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          O Comitê de Especialistas pontuou cada item através da escala do tipo
          Likert que já apresentamos a você. A partir disso, calculamos o Índice
          de Validade de Conteúdo.
        </div>
        <img class="img-fluid" src="@/assets/imgs/comite3.jpg" alt="" />
        <div class="alert feedback mb-3">
          A próxima tela é o seguimento da apresentação do Comitê de
          Especialistas. Para seguir, clique em "Próximo slide".
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column gap-4">
        <div class="alert text">
          O Índice de Validade de Conteúdo foi de 0,98. Você sabe o que isso
          significa? A tradução realizada reflete em 98% as equivalências
          semântica, idiomática, cultural e conceitual. Sabendo disso, seguimos
          para o próximo passo de adaptação transcultural: o teste piloto.
        </div>
        <img class="img-fluid" src="@/assets/imgs/comite4.jpg" alt="" />
      </div>
    </swiper-slide>
  </swiper-container>
  <SwiperButtons />
</template>
