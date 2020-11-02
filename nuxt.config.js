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

  css: ['~/assets/main.css', '~/assets/components.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/html-validator',
  ],

  modules: ['nuxt-i18n'],

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

  image: {
    providers: {
      local: {
        dir: '~/assets/images/',
        clearCache: false,
      },
    },
  },

  router: {
    base: '/frost-remnands/',
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 700],
      },
      Roboto: {
        wght: [100, 400, 700],
      },
      Raleway: {
        wght: [100, 400, 700],
      },
    },
  },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faHome', 'faAdjust', 'faLanguage'],
    },
  },

  content: {},

  generate: {
    interval: 2000,
  },

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
      preset: {},
    },
  },

  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed when using prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
        'heading-level': 'off',
        'attribute-allowed-values': 'off',
      },
    },
  },
}
