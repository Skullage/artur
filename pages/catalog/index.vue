<script setup>
const store = useCatalogStore();

useSeoMeta({
  title: "Каталог",
  ogTitle: "Каталог",
});
</script>

<template>
  <div class="container py-20">
    <h1 class="uppercase text-4xl font-bold mb-4 text-blue-900">Каталог</h1>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
      <NuxtLink
        :to="`/catalog/${item.category}`"
        v-for="(item, index) in store.catalog"
        :key="index"
      >
        <catalog-card-category :title="item.title" :image="item.image" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
