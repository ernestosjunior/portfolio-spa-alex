<template>
  <BaseLayout>
    <main>
      <section class="hero">
        <img :src="heroImage" class="hero__image" />
        <article class="hero__box">
          <h1 class="box__title">
            Olá, me chamo Alex Spencer e eu amo construir websites lindos
          </h1>
          <button class="box__button" @click="goToAbout">
            <img :src="arrowDown" />
            <p class="box__text">SOBRE MIM</p>
          </button>
        </article>
      </section>
      <section class="about" id="about">
        <div class="about__left">
          <img :src="alex" class="left__img" />
        </div>
        <div class="about__right">
          <h1 class="right__title">Sobre mim</h1>
          <h2 class="right__description">
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
        <h3 class="contact__title">
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
  const element = document.getElementById("about");

  if (element) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 950;
    element.scrollIntoView({
      block: isMobile ? "start" : "center",
      behavior: "smooth",
    });
  }
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

.hero__image {
  width: var(--home-sections-width);
  max-height: 600px;
}

.hero__box {
  position: absolute;
  z-index: 1;
  background: #fafafa;
  bottom: 0;
  left: 0;
  width: 445px;
}

.box__title {
  font-family: "Ibarra Real Nova", serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  letter-spacing: -0.446429px;
  color: #33323d;
  padding: 48px 24px;
}

.box__button {
  all: unset;
  cursor: pointer;
  background: #203a4c;
  height: 48px;
  display: flex;
  align-items: center;
  width: 60%;
  color: #ffffff;
}

.box__text {
  flex: 1;
  text-align: center;
}

.about {
  width: var(--home-sections-width);
  margin-bottom: 160px;
  display: flex;
  column-gap: 110px;
}

.about__left {
  width: 50%;
  height: 600px;
}

.left__img {
  object-fit: cover;
}

.about__right {
  width: 50%;
  height: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.right__title {
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
}

.right__description {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
}

.contact {
  width: var(--home-sections-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
}

.contact__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: #33323d;
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

@media (max-width: 949px) {
  .hero {
    margin-top: 60px;
  }

  .hero__box {
    position: initial;
    width: var(--home-sections-width);
  }

  .about {
    flex-direction: column;
    width: var(--home-sections-width);
  }

  .about__right {
    width: 100%;
  }

  .left__img {
    width: var(--home-sections-width);
    height: 95%;
  }
}
</style>
