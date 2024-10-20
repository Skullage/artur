<script setup lang="ts">
useSeoMeta({
  title: "Контакты",
  ogTitle: "Контакты",
  description: "Контакты",
  ogDescription: "Контакты",
});
</script>

<template>
  <div class="py-40">
    <div class="container flex flex-col gap-2 text-xl">
      <h1 class="uppercase text-4xl font-bold mb-4 text-blue-900">Контакты</h1>
      <div class="flex gap-4 items-center">
        <Icon name="mdi:phone" />
        <a href="tel:89999999999" class="hover:text-gray-500 duration-300"
          >8 (999) 999-99-99</a
        >
      </div>
      <div class="flex gap-4 items-center">
        <Icon name="mdi:map-marker" />
        <a
          href="https://yandex.ru/maps/-/CDXWz--R"
          class="hover:text-gray-500 duration-300"
          >г. Октябрьский, ул. Кооперативная, д. 113</a
        >
      </div>
      <div class="flex gap-4 items-center">
        <Icon name="mdi:email" />
        <a href="mailto:mail@mail.ru" class="hover:text-gray-500 duration-300"
          >mail@mail.ru</a
        >
      </div>
      <div class="flex gap-4 items-center">
        <Icon name="mdi:clock-time-five" />
        <div>
          <h2 class="font-bold">Время работы:</h2>
          <p>Пн-Пт: 08:00 - 17:00 Сб, Вс - выходной</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
