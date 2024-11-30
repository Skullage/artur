// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxthub/core",
  ],
  swiper: {},
  security: {
    corsHandler: {
      origin: "*",
    },
  },
  hub: {
    database: true,
    kv: true,
    blob: true,
  },
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
});
