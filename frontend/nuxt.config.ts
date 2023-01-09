// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  typescript: {
    shim: false
  },
  ssr: false,
  colorMode: {
    classSuffix: ''
  },
})
