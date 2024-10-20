<script setup>
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
const isShown = ref(false);
</script>

<template>
  <div @mouseleave="isShown = false">
    <NuxtLink
      :to="props.link"
      class="font-bold uppercase hover:text-gray-500 btn flex items-center gap-1 px-2 py-1 rounded duration-500 dropdownBtn text-white"
      :class="[
        { 'bg-blue-900 !text-white': isShown },
        { 'cursor-default': props.link === '#' },
      ]"
      @mouseenter="isShown = true"
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
      :class="{ 'opacity-0 pointer-events-none': !isShown }"
      class="absolute w-full left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-2 rounded duration-500 z-10"
      ref="dropdown"
    >
      <ul class="grid grid-cols-2 text-center">
        <li v-for="(elem, i) in props.links" :key="i" class="py-2">
          <NuxtLink
            :to="elem.link"
            class="hover:text-gray-500 duration-300 uppercase font-bold text-white"
            @click="isShown = false"
            >{{ elem.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
