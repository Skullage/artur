<script setup>
const urls = [{ title: "Прайс-лист 22/05/24", url: "/prices/1.xls" }];
const getFileExtension = (url) => {
  return url.split("/").pop().split(".").pop();
};
</script>

<template>
  <div class="py-40">
    <div class="container flex flex-col gap-2 text-xl">
      <h1 class="uppercase text-4xl font-bold mb-4 text-blue-900">
        Прайс-листы
      </h1>
      <div>
        <a
          class="inline-flex items-center gap-4 hover:text-gray-500 duration-300 hover:border-gray-500 border border-transparent p-2"
          v-for="(item, index) in urls"
          :key="index"
          :href="item.url"
          download
        >
          <Icon name="mdi:download" />
          <div>
            <h3 class="">{{ item.title }}</h3>
            <p class="uppercase">{{ getFileExtension(item.url) }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
