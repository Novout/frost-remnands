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
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/frost-remnands/favicon.ico',
      },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        proIcons: {
          solid: ['faHome'],
        },
      },
    ],
  ],

  modules: ['@nuxt/content', 'nuxt-i18n', '@nuxt/image'],
  i18n: {
    locales: [
      {
        name: 'Português',
        code: 'br',
        iso: 'br',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
      },
    ],
    defaultLocale: 'br',
    vueI18n: {
      fallbackLocale: 'br',
      messages: {
        br,
        en,
      },
    },
    seo: true,
  },

  router: {
    base: '/frost-remnands/',
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [700, 400],
        ital: [100],
      },
      Raleway: {
        wght: [100, 400],
      },
    },
  },

  content: {},

  generate: {
    interval: 2000,
  },
}
