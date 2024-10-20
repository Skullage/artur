<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "placeholder.png",
  },
});
</script>

<template>
  <div class="slide text-center border border-b-8 border-b-blue-900 py-2">
    <h3 class="uppercase font-bold mb-2">{{ props.title }}</h3>
    <NuxtImg
      :src="`/catalog-category/${props.image}`"
      class="m-auto h-40 w-40 object-contain"
    />
  </div>
</template>

<style scoped></style>
