import br from './lang/pt-BR.js'
import en from './lang/en-US.js'

export default {
  target: 'static',
  head: {
    title: 'Frost Remnands',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
  ],

  modules: ['@nuxt/content', 'nuxt-i18n'],
  i18n: {
    locales: ['br', 'en'],
    defaultLocale: 'br',
    vueI18n: {
      fallbackLocale: 'br',
      messages: {
        ...br,
        ...en,
      },
    },
  },

  router: {
    base: '/frost-remnands/',
  },

  content: {},

  generate: {
    interval: 2000,
  },
}
