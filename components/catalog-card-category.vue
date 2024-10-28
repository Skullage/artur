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
  <div
    class="slide text-center border border-b-8 border-b-primary py-2 h-full flex flex-col"
  >
    <h3 class="uppercase font-bold mb-2">{{ props.title }}</h3>
    <div
      class="lg:h-40 lg:w-40 mx-auto p-2 flex justify-end items-end flex-grow"
    >
      <NuxtImg
        :src="`/catalog-category/${props.image}`"
        class="block w-full h-auto object-contain"
      />
    </div>
  </div>
</template>

<style scoped></style>
