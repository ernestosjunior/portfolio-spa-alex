<template>
  <BaseLayout>
    <main class="contactView">
      <hr />
      <div class="callMe">
        <h1>Entre em Contato</h1>
        <section class="callMe-left">
          <h2>
            Eu adoraria escutar sobre seu trabalho atual e como eu poderia
            ajudar. Atualmente estou procurando por um cargo e aberto para
            várias oportunidades. Minha preferência é uma oportunidade em uma
            empresa Britânica. Mas também estou feliz em escutar sobre
            oportunidades remotas. Sou uma pessoa trabalhadora e positiva que
            sempre fará as tasks com um senso de propósito e atenção aos
            detalhes. Fique livre para checar meu perfis abaixo e entrar em
            contato utilizando o formulário.
          </h2>
          <img :src="networksDark" />
        </section>
      </div>
      <hr />
      <div class="contactSection">
        <h1>Contato</h1>
        <section v-if="inputs.length">
          <Input
            v-for="input in inputs"
            :label="input.label"
            :type="input.type"
          />
        </section>
      </div>
    </main>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/templates/BaseLayout.vue";
import Input from "@/components/Input.vue";
import networksDark from "@/assets/networksDark.svg";

const inputs = [
  { label: "Nome" },
  { label: "E-mail" },
  { label: "Mensagem", type: "textarea" },
];
</script>

<style scoped>
.contactView {
  width: var(--home-sections-width);
}
.callMe,
.contactSection {
  display: flex;
  column-gap: 125px;
}
.callMe > h1,
.contactSection > h1 {
  width: 50%;
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
}

.callMe-left {
  width: 50%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
}
.callMe-left > img {
  margin-top: 54px;
}
.contactSection {
  margin-bottom: 150px;
}
.contactSection > h1,
.contactSection > section {
  width: 50%;
}

hr {
  width: 100%;
  border-bottom: 1px solid #33323d;
  mix-blend-mode: normal;
  opacity: 0.15;
  margin: 48px 0;
}
hr:first-child {
  margin-top: unset;
}
</style>
