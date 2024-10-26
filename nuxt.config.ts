// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [],
  devtools: {enabled: true},
  app: {
    pageTransition: { name: 'loginPage', mode: 'out-in' }
  },
  routeRules: {
    // Áp dụng middleware cho tất cả các trang trừ trang login
    '/dashboard/*': { appMiddleware: 'auth' },
  },
  i18n: {
    // Set default locale
    defaultLocale: 'en',
    // Define the locales
    locales: [
      {code: 'en', name: 'English', iso: 'en-US', file: 'en.json'},
    ],
    // Specify where to find the translation files
    langDir: 'locales/',
    // Enable lazy loading of translation files
    lazy: true,
  },
  modules: ['@nuxtjs/i18n'],
  plugins: ['@/plugins/element-plus.ts','@/plugins/message.ts'],
  ssr: true,
  typescript: {
    typeCheck: true
  },
  extensions:['.ts']
})