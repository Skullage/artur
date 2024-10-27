<script setup>
import { useModalsStore } from "~/stores/modal.js";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "placeholder.png",
  },
  price: {
    type: String,
    default: "Договорная",
  },
  sizes: {
    type: Array,
    default: null,
  },
  link: {
    type: String,
  },
});

const store = useModalsStore();

const itemSize = ref(null);

const getItemPrice = computed(() => {
  return props.sizes
    ? props.sizes
        .find((el) => el.size === itemSize.value)
        ?.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : props.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

const showModal = () => {
  const data = {
    title: props.sizes ? `${props.title} ${itemSize.value}` : props.title,
    price: String(getItemPrice.value).replace(/[^0-9]/g, ""),
  };
  store.showModal(data);
};

onMounted(() => {
  itemSize.value = props.sizes ? props.sizes[0].size : null;
});
</script>

<template>
  <div class="slide text-center p-3 border flex flex-col h-full">
    <NuxtLink :to="link" class="cursor-pointer">
      <NuxtImg
        :src="`/catalog-items/${props.image}`"
        class="mx-auto h-40 w-40 object-contain mb-2"
      />
    </NuxtLink>
    <NuxtLink :to="link" class="cursor-pointer mb-8 flex-grow"
      ><h3 class="uppercase font-bold">
        {{ props.title }}
      </h3></NuxtLink
    >
    <select
      class="w-full mb-8 block py-2 px-4"
      v-if="props.sizes"
      v-model="itemSize"
    >
      <option
        v-for="(item, index) in props.sizes"
        :key="index"
        :value="item.size"
      >
        {{ item.size }}
      </option>
    </select>
    <p class="font-bold mb-8">{{ getItemPrice }}</p>
    <buy-button class="w-full" @click="showModal" />
  </div>
</template>

<style scoped></style>
