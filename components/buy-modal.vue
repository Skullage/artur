<script setup>
import { useModalsStore } from "~/stores/modal.js";

const store = useModalsStore();

const count = ref(1);

const getSum = computed(() => {
  return store.modal.price * count.value;
});

const name = ref(null);
const tel = ref(null);
const mail = ref(null);

const submitForm = () => {};
</script>

<template>
  <div class="bg-white w-1/2">
    <div class="flex justify-between p-4 bg-gray-300 mb-2 items-center">
      <h4 class="uppercase text-xl font-bold">Купить</h4>
      <button
        class="flex justify-center items-center hover:text-gray-700"
        @click="store.closeModal()"
      >
        <Icon name="material-symbols:close-rounded" size="1.4em" />
      </button>
    </div>
    <form class="flex flex-col gap-2 p-4" @submit.prevent="submitForm">
      <p class="leading-none font-bold text-sm text-gray-700 mb-2">
        Оставьте ваши контактные данные. Наши менеджеры свяжутся с вами для
        уточнения деталей заказа.
      </p>
      <label>
        Товар
        <input type="text" disabled :value="store.modal.title" />
      </label>
      <label>
        Цена
        <input type="text" disabled :value="store.modal.price" />
      </label>
      <label>
        Кол-во
        <input type="number" v-model.number="count" />
      </label>
      <label>
        Сумма
        <input type="number" disabled :value="getSum" />
      </label>
      <label>
        Ваше имя
        <input type="text" v-model="name" required />
      </label>
      <label>
        Телефон
        <input type="tel" v-model="tel" required />
      </label>
      <label>
        Эл. почта
        <input type="email" v-model="mail" required />
      </label>
      <div class="flex gap-1">
        <span class="uppercase font-bold text-xl">Итого:</span>
        <span class="flex-grow border-b border-dotted"></span>
        <span class="uppercase font-bold text-xl">{{ getSum + " ₽" }}</span>
      </div>
      <p class="text-center mb-4">
        Отправляя форму, вы соглашаетесь c
        <a
          href="#"
          class="underline text-gray-500 hover:text-gray-400 duration-300"
          >политикой конфиденциальности</a
        >
      </p>
      <input
        type="submit"
        value="Отправить заказ"
        class="uppercase col-span-2 px-2 !py-4 cursor-pointer bg-primary duration-500 text-white font-bold hover:brightness-125"
      />
    </form>
  </div>
</template>

<style scoped>
label {
  @apply flex flex-col gap-2;
}
input {
  @apply border px-4 py-1;
}
</style>
