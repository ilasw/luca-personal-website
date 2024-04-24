export default {
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {code: 'it', name: '🇮🇹 Italiano'},
      {code: 'en', name: '🇬🇧 English'}
    ],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: {
        en: {}
      }
    }
  }
}