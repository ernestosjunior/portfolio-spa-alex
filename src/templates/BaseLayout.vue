<template>
  <main class="base-layout">
    <Header />
    <section class="base-layout__main">
      <slot />
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.base-layout {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.base-layout__main {
  min-height: 100vh;
}
</style>
