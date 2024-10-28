<script setup>
import BuyButton from "~/components/buy-button.vue";
import { useModalsStore } from "~/stores/modal.js";

const store = useCatalogStore();
const modal = useModalsStore();

const route = useRoute();
const router = useRouter();

const getItemById = computed(
  () => store.getItemsByCategory(route.params.category)[route.params.id],
);

const itemSize = ref(null);

const getItemPrice = computed(() => {
  return getItemById.value.sizes
    ? getItemById.value.sizes
        .find((el) => el.size === itemSize.value)
        ?.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : getItemById.value.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

const showModal = () => {
  const data = {
    title: getItemById.value.sizes
      ? `${getItemById.value.title} ${itemSize.value}`
      : getItemById.value.title,
    price: String(getItemPrice.value).replace(/[^0-9]/g, ""),
  };
  modal.showModal(data);
};

onMounted(() => {
  itemSize.value = getItemById.value.sizes
    ? getItemById.value.sizes[0].size
    : null;
});

useSeoMeta({
  title: getItemById.value.title,
  ogTitle: getItemById.value.title,
});
</script>

<template>
  <div class="py-4">
    <div class="container">
      <div class="mb-4 flex items-center justify-end">
        <button
          @click="router.go(-1)"
          class="cursor-pointer text-xs font-bold uppercase flex items-center hover:text-gray-600 duration-300"
        >
          <Icon name="material-symbols:arrow-back-ios" />
          Назад в каталог
        </button>
      </div>
      <div class="flex gap-4 mb-8 flex-col md:flex-row">
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperPagination,
            SwiperNavigation,
          ]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          pagination
          navigation
          class="md:w-1/2 w-full basis-full md:basis-1/2 max-h-[450px]"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="(item, index) in getItemById.image" :key="index"
            ><NuxtImg
              :src="`/catalog-items/${item}`"
              class="w-full h-full object-cover cursor-pointer"
              @click="
                modal.showBigImage(`/catalog-items/`, index, getItemById.image)
              "
          /></SwiperSlide>
        </Swiper>
        <div class="md:w-1/2 w-full">
          <h1 class="font-bold text-3xl mb-8 uppercase">
            {{ getItemById.title }}
          </h1>
          <span class="font-bold text-3xl mb-8 block">{{ getItemPrice }}</span>
          <div v-if="getItemById.sizes">
            <span class="block text-sm text-gray-500 mb-4"
              >Вариант товара:</span
            >
            <select
              class="mb-8 py-2 px-4 block w-3/5"
              v-if="getItemById.sizes"
              v-model="itemSize"
            >
              <option
                v-for="(item, index) in getItemById.sizes"
                :key="index"
                :value="item.size"
              >
                {{ item.size }}
              </option>
            </select>
          </div>

          <buy-button @click="showModal" class="w-3/5" />
        </div>
      </div>
      <div
        class="border p-4 text-xl text-[#757576] leading-[190%] flex flex-col gap-4"
        v-html="getItemById.desc"
        v-if="getItemById.desc"
      ></div>
    </div>
  </div>
</template>
