<script setup>
useSeoMeta({
  title: "О компании",
  ogTitle: "О компании",
  description: "Информация о компании",
  ogDescription: "Информация о компании",
});
</script>

<template>
  <div class="py-10">
    <div class="container flex flex-col gap-2 text-xl">
      <h1 class="title">О нас</h1>
      <NuxtLink
        to="album"
        class="text-white bg-primary inline-block py-3 px-6 w-fit mb-4 hover:brightness-125 duration-300"
        >Фотогалерея</NuxtLink
      >
      <p>
        Наша компания занимается обеспечением строительной сферы качественным,
        доступным и удобным временным жильём, а также поставками товаров для
        благоустройства дач и приусадебных участков.
      </p>
      <p>
        «Туймазинские металлоконструкции» предлагает широкий выбор услуг по
        монтажу бытовок, блок-контейнеров, модульных сооружений, торговых
        павильонов, постов охраны, хозяйственных блоков и бань. Стоит отметить,
        что наши бани являются популярным элементом загородного участка,
        востребованным у многих россиян.
      </p>
      <p class="leading-6">
        У нас есть собственная база производства и монтажа, благодаря чему
        специалисты компании могут успешно реализовывать как стандартные, так и
        индивидуальные проекты. Все наши работы отличаются высоким качеством и
        выполняются в кратчайшие сроки.
      </p>
      <p>
        Если вас интересует покупка бытовок, контейнеров или других
        быстровозводимых конструкций, вы нашли то, что нужно. Мы всегда открыты
        к сотрудничеству и готовы предоставить вам все необходимые услуги.
      </p>
      <p>
        «Туймазинские металлоконструкции» заинтересованы в партнёрстве с вами,
        поэтому тщательно контролируют каждый этап выполнения заказа – от его
        оформления до доставки готового продукта.
      </p>
      <p>
        Будем рады приветствовать вас в числе наших клиентов и надеемся на
        долгосрочное и выгодное сотрудничество!
      </p>
    </div>
  </div>
</template>
