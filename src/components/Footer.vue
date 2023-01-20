<template>
  <footer class="footer">
    <section class="footer__left">
      <Logo :fill="'#ffffff'" />
      <nav v-if="routes.length" class="footer__links">
        <router-link
          v-for="option in routes"
          :to="option.link"
          class="links__link"
          >{{ option.label }}</router-link
        >
      </nav>
    </section>
    <img :src="networks" />
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";
import networks from "@/assets/networks.svg";

const routes = [
  { label: "HOME", link: "/" },
  { label: "PORTFOLIO", link: "/portfolio" },
  { label: "CONTATO", link: "/contato" },
];
</script>

<style scoped>
.footer {
  width: 100%;
  height: 60px;
  background: #33323d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4% 8%;
  position: absolute;
  bottom: 0;
}

.footer__left {
  display: flex;
  align-items: center;
  column-gap: 48px;
}

.footer__links {
  display: flex;
  column-gap: 40px;
}

.links__link {
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffffff;
}

@media (max-width: 949px) {
  .footer {
    flex-direction: column;
    height: auto;
    gap: 18px;
    padding: 4% 8%;
  }
}
</style>
