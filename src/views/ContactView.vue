<template>
  <BaseLayout>
    <main class="contact-view">
      <hr class="contact-view__hr" />
      <div class="call">
        <h1 class="call__title">Entre em Contato</h1>
        <section class="call__left">
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
          <img :src="networksDark" class="left__img" />
        </section>
      </div>
      <hr class="contact-view__hr" />
      <div class="contact-section">
        <h1 class="contact-section__title">Contato</h1>
        <section v-if="inputs.length" class="contact-section__form">
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
.contact-view {
  width: var(--home-sections-width);
}

.call,
.contact-section {
  display: flex;
  column-gap: 125px;
}

.call__title,
.contact-section__title {
  width: 50%;
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
}

.call__left {
  width: 50%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
}

.left__img {
  margin-top: 54px;
}

.contact-section {
  margin-bottom: 150px;
}

.contact-section__title,
.contact-section__form {
  width: 50%;
}

.contact-view__hr {
  width: 100%;
  border-bottom: 1px solid #33323d;
  mix-blend-mode: normal;
  opacity: 0.15;
  margin: 48px 0;
}

.contact-view__hr:first-child {
  margin-top: unset;
}
</style>
