<script setup>
useSeoMeta({
  title: "Главная",
  ogTitle: "Главная",
  description: "Главная страница сайта",
  ogDescription: "Главная страница сайта",
});

const adv = [
  { title: "Высокое качество", icon: "proicons:checkmark-starburst" },
  { title: "Лидер цен", icon: "hugeicons:discount" },
  { title: "Широкий выбор", icon: "solar:buildings-outline" },
  { title: "Любая форма оплаты", icon: "mynaui:credit-card" },
  {
    title: "Гарантия от 12 месяцев",
    icon: "material-symbols:google-guarantee",
  },
];

const catalog = [
  { title: "Аренда бытовок", img: "1.jpg" },
  { title: "Торговые павильоны", img: "1.jpg" },
  { title: "Бани", img: "1.jpg" },
  { title: "Модульные офисы", img: "1.jpg" },
  { title: "Спец. назначения", img: "1.jpg" },
  { title: "Бытовки", img: "1.jpg" },
  { title: "Посты охраны", img: "1.jpg" },
  { title: "Хозблоки", img: "1.jpg" },
  { title: "Дачные домики", img: undefined },
];

const best = [
  {
    title: "Блок-контейнер 'Стандарт'",
    img: "1.jpg",
    price: "от 100 ₽",
    sizes: [
      { size: "1m", price: "от 100 ₽" },
      { size: "2m", price: "от 200 ₽" },
    ],
  },
  { title: "Блок-контейнер 'Стандарт зима'", img: "1.jpg", price: "от 1000 ₽" },
  { title: "Блок-контейнер 'Люкс-2'", img: "1.jpg", price: "от 10000 ₽" },
  { title: "Блок-контейнер 'Люкс'", img: "1.jpg", price: "от 100000 ₽" },
  {
    title: "Модуль для Теплового пункта 2",
    img: "1.jpg",
    price: "от 100000 ₽",
  },
  { title: "Дачный домик 'Сканди-4'", img: "1.jpg", price: "от 50 ₽" },
  { title: "Пост охраны 'Люкс АКП'", img: "1.jpg", price: "от 3450 ₽" },
  { title: "Торговый павильон 'Браун'", img: "1.jpg", price: undefined },
];
</script>

<template>
  <div>
    <Swiper
      class="h-[480px] m-auto"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      navigation
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
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
      <SwiperSlide class="slide first-slide relative">
        <a
          href="#"
          class="rounded-full flex justify-center items-center hover:scale-105 duration-300 right-16 top-2 absolute border-2 p-2"
        >
          <Icon name="bx:bxl-vk" size="1.6rem" class="text-white"></Icon>
        </a>
        <a
          href="#"
          class="rounded-full flex justify-center items-center hover:scale-105 duration-300 right-2 top-2 absolute border-2 p-2"
        >
          <Icon name="mdi:instagram" size="1.6rem" class="text-white"></Icon>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
  <div>
    <div class="container">
      <div class="grid grid-cols-5 gap-4 -mt-24 relative z-20 mb-20">
        <adv-card
          v-for="(item, index) in adv"
          :key="index"
          :icon="item.icon"
          :title="item.title"
        />
      </div>
    </div>
  </div>
  <div class="mb-10">
    <div class="container">
      <h2 class="uppercase font-bold text-3xl mb-4">Каталог продукции</h2>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="5"
        :space-between="30"
        :loop="true"
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
        <SwiperSlide v-for="(item, index) in catalog" :key="index">
          <catalog-card-category :title="item.title" :image="item.img" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <div class="mb-10">
    <div class="container">
      <h2 class="uppercase font-bold text-3xl mb-4">Хиты продаж</h2>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="5"
        :space-between="30"
        :loop="true"
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
        <SwiperSlide v-for="(item, index) in best" :key="index">
          <catalog-card-item
            :title="item.title"
            :image="item.img"
            :price="item.price"
            :sizes="item.sizes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <div class="bg-blue-900 py-40">
    <div class="container grid grid-cols-2 gap-4">
      <div class="text-white">
        <h2 class="text-4xl uppercase font-bold mb-8">О компании</h2>
        <div class="text-xl flex flex-col gap-4 mb-6">
          <p>
            Наша деятельность – это обеспечение строительной отрасли комфортным,
            удобным и недорогим временным жильем. Также мы осуществляем поставки
            продукции для обустройства дачных и приусадебных участков.
          </p>
          <p>
            Компания «МОДУЛЬ ПЛЮС» рада предложить каждому своему клиенту полный
            спектр услуг в области монтажа бытовок, блок-контейнеров, модульных
            зданий, торговых павильонов, постов охраны, хозблоков и бань. К
            слову стоит сказать, что такие бани – прекрасный элемент дачного
            участка, который пользуется огромной популярностью среди наших
            соотечественников.
          </p>
          <p>
            Мы располагаем собственной производственно-монтажной и сырьевой
            базой, что позволяет нашим специалистам полноценно выполнять любые
            проекты, как индивидуальные, так и типовые. Каждый наш проект – это
            отличное качество, которое Вы получите в самые короткие сроки.
          </p>
          <p>
            Если Вас интересуют бытовки, блок-контейнеры, или другие
            быстровозводимые конструкции, тогда Вы обратились по адресу. Мы с
            удовольствием будем работать с Вами и готовы предложить весь спектр
            наших услуг.
          </p>
          <p>
            Компания «МОДУЛЬ ПЛЮС» заинтересована в сотрудничестве с Вами,
            поэтому мы контролируем оказание услуг на каждой отдельно взятой
            стадии, начиная с оформления заказа и до поставки изделия в
            указанное место.
          </p>
          <p>
            Мы будем рады видеть Вас нашим клиентом и надеемся на плодотворное,
            взаимовыгодное сотрудничество!
          </p>
        </div>
        <div class="flex gap-8">
          <div class="flex flex-col basis-1/2">
            <h3 class="text-5xl font-bold mb-2">> 1000</h3>
            <span class="h-1 mb-1 w-1/2 bg-gray-300 progress"></span>
            <p class="leading-none">единиц выпущенной продукции в год</p>
          </div>
          <div class="flex flex-col basis-1/2">
            <h3 class="text-5xl font-bold mb-2">> 10</h3>
            <span class="h-1 mb-1 w-1/2 bg-gray-300 progress"></span>
            <p class="leading-none">лет на рынке</p>
          </div>
        </div>
      </div>
      <div>
        <form
          class="p-8 grid grid-cols-2 gap-4 text-center bg-blue-800 text-white"
        >
          <h3 class="text-3xl uppercase font-bold col-span-2 mb-4">
            Напишите нам
          </h3>
          <input
            type="text"
            placeholder="Ваше имя *"
            class="border p-2 text-black"
          />
          <input
            type="text"
            placeholder="Ваш E-mail *"
            class="border p-2 text-black"
          />
          <textarea
            cols="20"
            rows="5"
            placeholder="Ваш вопрос *"
            class="col-span-2 border p-2 text-black"
          ></textarea>
          <p class="col-span-2">
            Отправляя форму, вы соглашаетесь c
            <a
              href="#"
              class="underline text-gray-500 hover:text-gray-400 duration-300"
              >политикой конфиденциальности</a
            >
          </p>
          <input
            type="submit"
            value="Отправить"
            class="uppercase col-span-2 border-2 px-2 py-4 cursor-pointer hover:bg-blue-900 duration-500 hover:text-white font-bold hover:border-transparent"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first-slide {
  background: url("@/assets/images/SLIDERFULL_min.png") no-repeat;
}
.swiper-wrapper {
  align-items: stretch !important;
}
.swiper-slide {
  height: auto !important;
}
.progress:after {
  content: "";
  @apply h-1 relative left-0 top-0 block bg-blue-600 w-[80%];
}
</style>
