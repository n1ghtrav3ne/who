// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css:[
    "~/assets/css/main.css",
    "~/assets/css/fonts.css",
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "nuxt-swiper", "@nuxt/image"],

  app:{
    head:{
      title:"هو بوتیک"
    }
  }

})