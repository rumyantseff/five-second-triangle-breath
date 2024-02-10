import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'five-second-triangle-breath',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'images/triangle-mini.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Русский',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
        {
          name: 'Slovenský',
          code: 'sk',
          iso: 'sk-SK',
          file: 'sk-SK.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Deutsch',
          code: 'de',
          iso: 'de-DE',
          file: 'de-DE.js'
        },  
        {
          name: 'Český',
          code: 'cz',
          iso: 'cz-CZ',
          file: 'cz-CZ.js'
        },      
      ],
      langDir: 'lang/',
      defaultLocale: 'ru',
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: false,
      themes: {
        light: {
          primary: '#325184',
          secondary: '#d9dcfb',
          tertiary: '#4065b2',
          quanterary: '#bcbde7',

          primaryFont: '#2e384d',
          secondaryFont: '#8798ad',
          tertiaryFont: '#ffffff',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
