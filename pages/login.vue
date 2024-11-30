<script setup lang="ts">
const email = ref("");
</script>
<template>
  <div class="container">
    <button @click="">Sign In with E-Mail</button>
    <input v-model="email" type="email" />
  </div>
</template>
