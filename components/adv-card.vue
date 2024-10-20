<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card-advantage">
    <div
      class="py-12 px-8 flex justify-center flex-col items-center h-full text-white font-bold text-lg text-center"
    >
      <Icon :name="props.icon" size="4rem"></Icon>
      {{ props.title }}
    </div>
  </div>
</template>

<style scoped>
.card-advantage {
  background: rgba(72, 106, 165, 0.53);
  backdrop-filter: blur(16px);
}
</style>
