<template>
  <main class="container">
    <Header />
    <section class="main">
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
.container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  min-height: 100vh;
}
</style>
