const aboutUsImg = require('./static/about-us-img.json');
const roomsData = require('./static/rooms.json');
const whyUsImg = require('./static/why-us.json');
const faq = require('./static/faq.json');
const services = require('./static/services.json');
const sharesData = require('./static/shares.json');
const reviews = require('./static/reviews.json');
const news = require('./static/news.json');
const newHostels = require('./static/newHostels.json');

export default {
  target: 'static',
  ssr: false,
  useEslint: false, 
  lintOnSave: false,
  // env: {
  //   aboutUsImg,
  //   roomsData,
  //   whyUsImg,
  //   faq,
  //   services,
  //   sharesData,
  //   reviews,
  //   news,
  //   newHostels
  // },

  buildModules: [
    '@nuxtjs/dotenv'
  ],

  runtimeConfig: {
    aboutUsImg: aboutUsImg,
    roomsData: roomsData,
    whyUsImg: whyUsImg,
    faq: faq,
    services: services,
    sharesData: sharesData,
    reviews: reviews,
    news: news,
    newHostels: newHostels,
  },

  head: {
    title: 'Hostel Palmburg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  css: ['@/assets/stylesheets/main.scss', 'hooper/dist/hooper.css'],

  components: true,

  buildModules: ['@aceforth/nuxt-optimized-images', '@nuxtjs/eslint-module'],

  modules: ['nuxt-i18n', '@nuxtjs/axios'],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ru',
        file: 'ru.js',
      },
      {
        code: 'en',
        file: 'en.js',
      },
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'static/locales',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
    postcss: {
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['last 3 versions', '> 1%'],
        },
      },
    },
  },

  plugins: ['~/plugins/slider.js'],

  optimizedImages: {
    optimizeImages: true,
    responsive: {
      sizes: [576, 768, 992, 1200, 1590],
      placeholder: true,
      placeholderSize: 20,
    },
  },
};
