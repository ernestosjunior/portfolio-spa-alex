<template>
  <label class="label">
    <p class="label__text">{{ label }}</p>
    <textarea v-if="type === 'textarea'" class="textarea" />
    <input v-else type="text" class="input" />
  </label>
</template>

<script setup lang="ts">
defineProps({ label: String, type: String });
</script>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label__text {
  font-weight: 700;
  font-size: 13px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
}

.input,
.textarea {
  all: unset;
  cursor: text;
  background: #33323d;
  mix-blend-mode: normal;
  opacity: 0.1;
  height: 48px;
  width: 100%;
}

.textarea {
  min-height: 96px;
}
</style>
