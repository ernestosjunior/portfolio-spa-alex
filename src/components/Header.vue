<template>
  <header class="header">
    <Logo />
    <nav v-if="routes.length" class="links">
      <router-link
        v-for="option in routes"
        :to="option.link"
        class="link"
        active-class="link-active"
        >{{ option.label }}</router-link
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";

const routes = [
  { label: "HOME", link: "/" },
  { label: "PORTFOLIO", link: "/portfolio" },
  { label: "CONTATO", link: "/contato" },
];
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 8%;
}
.links {
  display: flex;
  column-gap: 40px;
}
.link {
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
}
.link-active {
  color: #5fb4a2;
}
@media (max-width: 481px) {
  .header {
    flex-direction: column;
    row-gap: 40px;
  }
}
</style>
