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
    // script: [{
    //   src: 'https://kit.fontawesome.com/449a05d47f.js'
    // }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      href: 'https://fonts.googleapis.com/css?family=Righteous%7CMerriweather:300,300i,400,400i,700,700i',
      rel: 'stylesheet'
    }]
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
    '@/assets/css/theme.css',
    'highlight.js/styles/hybrid.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/filters',
    '~/plugins/fontawesome.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
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
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
