import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com/',
      crossorigin: true
    },
    {
      href: 'https://fonts.googleapis.com/css?family=Righteous%7CMerriweather:300,300i,400,400i,700,700i',
      rel: 'stylesheet'
    }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#03a87c',
    height: '5px'
  },
  /*
   ** Global CSS
   */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '@/assets/css/theme.css',
    'highlight.js/styles/hybrid.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/filters',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/lazyload', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    // Doc: https://www.bazzite.com/docs/nuxt-optimized-images/usage/#query-params
    '@bazzite/nuxt-optimized-images',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    ['prismic-nuxt', {
      endpoint: 'https://jpnarowski-com.cdn.prismic.io/api/v2',
      linkResolver: function (doc, ctx) {
        return '/'
      }
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-7419920-14'
    }]
  ],
  // Doc: https://www.bazzite.com/docs/nuxt-optimized-images/usage/#query-params
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: true,
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
