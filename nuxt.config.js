export default {
  target: 'static',
  ssr: false,

  head: {
    title: 'Hostel Palmburg',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/stylesheets/main.scss',
    'hooper/dist/hooper.css'
  ],

  components: true,

  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/eslint-module'
  ],

  modules: ['nuxt-i18n', '@nuxtjs/axios'],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ru',
        file: 'ru.js'
      },
      {
        code: 'en',
        file: 'en.js'
      }
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'static/locales',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    }
  },

  build: {
    postcss: {
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['last 3 versions', '> 1%']
        }
      }
    }
  },

  plugins: [
    '~/plugins/slider.js'
  ],

  optimizedImages: {
    optimizeImages: true,
    responsive: {
      sizes: [
        576,
        768,
        992,
        1200,
        1590
      ],
      placeholder: true,
      placeholderSize: 20
    }
  }
}
