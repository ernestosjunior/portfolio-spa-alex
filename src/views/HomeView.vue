<template>
  <BaseLayout>
    <main>
      <section class="hero">
        <img :src="heroImage" class="hero-image" />
        <article class="hero-box">
          <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
          <button class="aboutButton" @click="goToAbout">
            <img :src="arrowDown" />
            <p>SOBRE MIM</p>
          </button>
        </article>
      </section>
      <section class="about" id="about">
        <div class="about-left">
          <img :src="alex" />
        </div>
        <div class="about-right">
          <h1 class="about-title">Sobre mim</h1>
          <h2 class="about-description">
            Sou um desenvolvedor front-end júnior procurando por uma
            oportunidade. Eu foco em escrever HTML acessível, usando práticas
            modernas de CSS e escrevendo um JavaScript limpo. Quando estou
            escrevendo código JavaScript, na maioria das vezes estou usando
            React, mas posso me adapta para qualquer ferramenta se necessário.
            Moro em Londres, UK, mas também seria feliz trabalhando remotamente
            e tenho experiência em times remotos. Quando não estou codando,
            poderá me achar fora de casa. Eu adoro estar próximo a natureza seja
            para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma
            olhada no meu trabalho.
          </h2>
          <button @click="goToPortfolio" class="button">
            IR PARA PORTFOLIO
          </button>
        </div>
      </section>
      <section class="contact">
        <h3>
          Interessado em fazer <br />
          projetos comigo?
        </h3>
        <button class="button" @click="goToContact">CONTATO</button>
      </section>
    </main>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/templates/BaseLayout.vue";
import heroImage from "@/assets/heroImage.png";
import arrowDown from "@/assets/arrowDown.svg";
import alex from "@/assets/alex.png";
import { useRouter } from "vue-router";

const router = useRouter();

function goToPortfolio() {
  router.push("/portfolio");
}

function goToAbout() {
  let element = document.getElementById("about");
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

function goToContact() {
  router.push("/contato");
}
</script>

<style scoped>
.hero {
  width: 100%;
  position: relative;
  margin-bottom: 115px;
}
.hero-image {
  width: var(--home-sections-width);
  max-height: 600px;
}
.hero-box {
  position: absolute;
  z-index: 1;
  background: #fafafa;
  bottom: 0;
  left: 0;
  width: 445px;
}
.hero-box > h1 {
  font-family: "Ibarra Real Nova", serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  letter-spacing: -0.446429px;
  color: #33323d;
  padding: 48px 24px;
}
.aboutButton {
  all: unset;
  cursor: pointer;
  background: #203a4c;
  height: 48px;
  display: flex;
  align-items: center;
  width: 44%;
  color: #ffffff;
}
.aboutButton > p {
  flex: 1;
  text-align: center;
}
.about {
  width: var(--home-sections-width);
  margin-bottom: 160px;
  display: flex;
  column-gap: 110px;
}

.about-left {
  width: 50%;
  height: 600px;
}

.about-left > img {
  object-fit: cover;
}
.about-right {
  width: 50%;
  height: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.about-title {
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
}
.about-description {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
}

.button {
  all: unset;
  cursor: pointer;
  border: 1px solid #33323d;
  width: 204px;
  height: 40px;
  text-align: center;
  align-content: flex-end;
  align-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #33323d;
}
.contact {
  width: var(--home-sections-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
}

.contact > h3 {
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
}
</style>
