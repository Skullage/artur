<script setup>
import { useModalsStore } from "~/stores/modal.js";

useSeoMeta({
  title: "Фотоальбом",
  ogTitle: "Фотоальбом",
  description: "Фотоальбом",
  ogDescription: "Фотоальбом",
});

const store = useModalsStore();
</script>

<template>
  <div class="py-10">
    <div class="container">
      <h1 class="title">О нас</h1>
      <div class="grid grid-cols-5 gap-8 items-center">
        <NuxtImg
          :src="`/album/${item}`"
          v-for="(item, index) in store.image.images"
          :key="index"
          class="w-full block h-auto cursor-pointer hover:scale-110 duration-300"
          @click="store.showBigImage('/album/', index, store.image.images)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
