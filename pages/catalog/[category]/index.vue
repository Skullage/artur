<script setup>
const store = useCatalogStore();

const route = useRoute();

const getCurrentCategory = computed(() =>
  store.catalog.find((el) => el.category === route.params.category),
);

useSeoMeta({
  title: getCurrentCategory.value.title,
  ogTitle: getCurrentCategory.value.title,
});
</script>

<template>
  <div class="container py-20">
    <h1 class="uppercase text-4xl font-bold mb-4 text-blue-900">
      {{ getCurrentCategory.title }}
    </h1>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
      <catalog-card-item
        v-for="(item, index) in getCurrentCategory.items"
        :key="index"
        :title="item.title"
        :image="item.image[0]"
        :price="item.price"
        :sizes="item.sizes"
        :link="`/catalog/${route.params.category}/${index}`"
      />
    </div>
  </div>
</template>

<style scoped></style>
