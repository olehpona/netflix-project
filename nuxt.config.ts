// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: [
    {
      path: '~/components',
    },
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueform/nuxt'],
})