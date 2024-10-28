<script setup>
import { useModalsStore } from "~/stores/modal";

const store = useModalsStore();
const catalogStore = useCatalogStore();

const links = [
  { name: "Главная", link: "/", dropdownLinks: [] },
  {
    name: "О нас",
    link: "/about",
    dropdownLinks: [{ name: "Фотоальбом", link: "/album" }],
  },
  {
    name: "Каталог",
    link: "/catalog",
    dropdownLinks: catalogStore.catalog
      .filter((el) => el.items.length > 0)
      .map((el) => ({
        name: el.title,
        link: `/catalog/${el.category}`,
      })),
  },
  { name: "Прайс-листы", link: "/price", dropdownLinks: [] },
  { name: "Доставка и оплата", link: "/delivery", dropdownLinks: [] },
  { name: "Контакты", link: "/contacts", dropdownLinks: [] },
];
</script>

<template>
  <div class="flex flex-col min-h-screen" id="wrapper">
    <header class="min-h-24">
      <div class="top-header py-4">
        <div class="container flex justify-between">
          <div>
            <NuxtImg />
          </div>
          <div
            class="flex gap-4 md:gap-8 items-center flex-col md:flex-row text-sm md:text-md"
          >
            <div>
              <Icon
                name="mdi:email"
                class="align-middle mr-1 text-blue-500"
                size="1.2em"
              />
              <a href="mailto:mail@mail.ru" class="top-header__link"
                >mail@mail.ru</a
              >
            </div>
            <div>
              <Icon
                name="mdi:phone"
                class="align-middle mr-1 text-blue-500"
                size="1.2em"
              />
              <a href="tel:89999999999" class="top-header__link"
                >8 (999) 999-99-99</a
              >
            </div>
            <div>
              <Icon
                name="mdi:map-marker"
                class="align-middle mr-1 text-blue-500"
                size="1.2em"
              />
              <a
                href="https://yandex.ru/maps/-/CDXWz--R"
                class="max-w-36 leading-none top-header__link"
                >г. Октябрьский, ул. Кооперативная, д. 113</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-header py-4 bg-primary relative">
        <div class="container">
          <button
            @click="store.menu.isMobileMenuShow = true"
            class="close-btn text-white md:hidden"
          >
            <Icon name="ci:hamburger" size="3em" />
          </button>
          <nav class="hidden md:block">
            <ul class="flex gap-4 justify-center items-center">
              <li v-for="(item, index) in links" :key="index">
                <NuxtLink
                  :to="item.link"
                  class="hover:text-hoverGray duration-300 font-bold uppercase text-white text-sm lg:text-md"
                  exactActiveClass="text-blue-500"
                  v-if="!item.dropdownLinks.length > 0"
                  >{{ item.name }}</NuxtLink
                >
                <dropdown-menu
                  v-else
                  :links="item.dropdownLinks"
                  :name="item.name"
                  :link="item.link"
                  class="text-sm lg:text-md"
                />
              </li>
            </ul>
          </nav>
          <nav
            class="fixed md:hidden w-full h-full left-0 top-0 block bg-primary z-20 -translate-y-[1000px] duration-500"
            :class="{ '!translate-y-0': store.menu.isMobileMenuShow }"
          >
            <button
              class="flex justify-center items-center hover:text-gray-700 absolute right-0 text-white p-4"
              @click="store.menu.isMobileMenuShow = false"
            >
              <Icon name="material-symbols:close-rounded" size="1.4em" />
            </button>
            <ul class="flex gap-4 justify-center items-center flex-col h-full">
              <li v-for="(item, index) in links" :key="index">
                <NuxtLink
                  :to="item.link"
                  class="hover:text-hoverGray duration-300 font-bold uppercase text-white py-8"
                  exactActiveClass="text-blue-500"
                  @click="store.menu.isMobileMenuShow = false"
                  v-if="!item.dropdownLinks.length > 0"
                  >{{ item.name }}</NuxtLink
                >
                <dropdown-menu
                  v-else
                  :links="item.dropdownLinks"
                  :name="item.name"
                  :link="item.link"
                  class="text-sm lg:text-md"
                  @click="store.menu.isMobileMenuShow = false"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-700 py-20">
      <div
        class="container flex gap-8 justify-between !mb-8 flex-col md:flex-row"
      >
        <div>
          <h2 class="uppercase mb-4 font-bold text-white">Наш адрес</h2>
          <a href="https://yandex.ru/maps/-/CDXWz--R" class="footer__link"
            >г. Октябрьский, ул. Кооперативная, д. 113</a
          >
        </div>
        <div>
          <h2 class="uppercase mb-4 font-bold text-white">Телефоны</h2>
          <a href="tel:89999999999" class="footer__link">8 (999) 999-99-99</a>
        </div>
        <div>
          <h2 class="uppercase mb-4 font-bold text-white">Время работы</h2>
          <p class="text-white">Пн - Пт: 08:00 - 17:00</p>
          <p class="text-white">Сб, Вс - выходной</p>
        </div>
        <div>
          <h2 class="uppercase mb-4 font-bold text-white">Почта</h2>
          <a href="mailto:mail@mail.ru" class="footer__link">mail@mail.ru</a>
        </div>
        <div>
          <h2 class="uppercase mb-4 font-bold text-white">Наши соцсети</h2>
          <div class="flex gap-4">
            <a
              href="#"
              class="rounded-full flex justify-center items-center hover:scale-105 duration-300 border-2 p-2"
            >
              <Icon name="bx:bxl-vk" size="1.6rem" class="text-white"></Icon>
            </a>
            <a
              href="#"
              class="rounded-full flex justify-center items-center hover:scale-105 duration-300 border-2 p-2"
            >
              <Icon
                name="mdi:instagram"
                size="1.6rem"
                class="text-white"
              ></Icon>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aca9c3796ac2e21d004dacde5c29150f66e865f97f265eaf33c32dbc3751d133d&amp;source=constructor"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </footer>
    <div
      class="fixed left-0 top-0 w-screen h-screen bg-black/50 z-50"
      v-if="store.isBigImageShown"
    >
      <div class="flex justify-center items-center h-full">
        <button
          class="fixed left-2 md:left-10 text-xs md:text-md top-1/2 -translate-y-1/2 text-gray-300 hover:text-white rounded-full flex justify-center items-center cursor-pointer bg-black/70"
          @click="store.showPrevImage()"
        >
          <Icon name="material-symbols:chevron-left-rounded" size="4em" />
        </button>

        <div class="max-w-[480px]">
          <NuxtImg
            :src="store.image.url + store.image.array[store.image.curIndex]"
            class="w-full block h-auto"
          />
        </div>

        <button
          class="fixed right-2 text-xs md:text-md md:right-10 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white rounded-full flex justify-center items-center cursor-pointer bg-black/70"
          @click="store.showNextImage()"
        >
          <Icon name="material-symbols:chevron-right-rounded" size="4em" />
        </button>
        <button
          class="fixed right-2 top-2 md:right-10 md:top-10 text-xs md:text-md text-gray-300 hover:text-white rounded-full flex justify-center items-center cursor-pointer bg-black/70 p-2"
          @click="store.closeBigImage()"
        >
          <Icon name="material-symbols:close-rounded" size="3em" />
        </button>
      </div>
    </div>
    <div
      class="fixed left-0 top-0 w-screen h-screen bg-black/50 z-50"
      v-if="store.isModalShown"
    >
      <div class="flex justify-center items-center h-full">
        <buy-modal />
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-header__link {
  @apply duration-300 pb-1 relative text-sm text-blue-500;
}
.top-header__link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  @apply bg-blue-500;
}
.top-header__link:hover::after {
  animation: underline 0.3s linear forwards;
}

.footer__link {
  @apply duration-300 pb-1 relative text-white;
}
.footer__link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  @apply bg-white;
}
.footer__link:hover::after {
  animation: underline 0.3s linear forwards;
}

@keyframes underline {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
