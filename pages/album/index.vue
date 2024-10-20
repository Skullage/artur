<script setup>
import { useModalsStore } from "~/stores/modal.js";

const store = useModalsStore();
</script>

<template>
  <div class="py-20">
    <div class="container">
      <h1 class="uppercase text-4xl font-bold mb-4 text-blue-900">О нас</h1>
      <div class="grid grid-cols-5 gap-8 items-center">
        <NuxtImg
          :src="item"
          v-for="(item, index) in store.image.images"
          :key="index"
          class="w-full block h-auto cursor-pointer hover:scale-110 duration-300"
          @click="store.showBigImage(index)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
