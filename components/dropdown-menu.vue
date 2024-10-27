<script setup>
import { useModalsStore } from "~/stores/modal.js";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
  },
});

const store = useModalsStore();

const isShown = ref(false);

watch(
  () => store.dropdownMenu.isShow,
  (newValue) => {
    if (!newValue) {
      isShown.value = false;
    }
  },
);
</script>

<template>
  <div @mouseleave="isShown = false">
    <NuxtLink
      :to="props.link"
      class="font-bold uppercase hover:text-hoverGray btn flex items-center gap-1 px-2 py-1 rounded duration-500 dropdownBtn text-white"
      @mouseenter="isShown = true"
      v-if="props.link !== '#'"
    >
      <span class="pointer-events-none">{{ props.name }}</span>
      <Icon
        name="ic:baseline-expand-more"
        size="1.2em"
        class="duration-300 transition-transform pointer-events-none"
        :class="{ 'rotate-180': isShown }"
      />
    </NuxtLink>
    <div
      class="font-bold uppercase hover:text-hoverGray btn flex items-center gap-1 px-2 py-1 rounded duration-500 dropdownBtn text-white"
      @mouseenter="isShown = true"
      v-else
    >
      <span class="pointer-events-none">{{ props.name }}</span>
      <Icon
        name="ic:baseline-expand-more"
        size="1.2em"
        class="duration-300 transition-transform pointer-events-none"
        :class="{ 'rotate-180': isShown }"
      />
    </div>
    <div
      :class="{ 'opacity-0 pointer-events-none': !isShown }"
      class="absolute w-full left-0 bg-primary px-4 py-2 duration-500 z-10 dropdownMenu"
      ref="dropdown"
    >
      <ul class="grid grid-cols-2 text-center">
        <li v-for="(elem, i) in props.links" :key="i" class="py-2">
          <NuxtLink
            :to="elem.link"
            class="hover:text-hoverGray duration-300 uppercase font-bold text-white"
            @click="isShown = false"
            >{{ elem.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.dropdownMenu {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
