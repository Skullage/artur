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
});

const store = useModalsStore();

const itemSize = ref(null);

const getItemPrice = computed(() => {
  return props.sizes
    ? props.sizes.find((el) => el.size === itemSize.value)?.price
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
    <NuxtImg
      :src="`/catalog-category/${props.image}`"
      class="mx-auto h-40 w-40 object-contain mb-2"
    />
    <h3 class="uppercase font-bold mb-8 flex-grow">{{ props.title }}</h3>
    <select class="w-full mb-8" v-if="props.sizes" v-model="itemSize">
      <option
        v-for="(item, index) in props.sizes"
        :key="index"
        :value="item.size"
      >
        {{ item.size }}
      </option>
    </select>
    <p class="font-bold mb-8">{{ getItemPrice }}</p>
    <button
      class="uppercase font-bold bg-blue-900 text-white w-full py-3 hover:bg-blue-800 duration-300"
      @click="showModal"
    >
      Купить
    </button>
  </div>
</template>

<style scoped></style>
