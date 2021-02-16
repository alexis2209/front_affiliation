require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
console.log(process.env.NODE_ENV);
export default {

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'front_affiliation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i' },
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/_slug.vue')
      })
    },
    //middleware: ['layout']
  },

  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    'vue-slider-component/dist-css/vue-slider-component.css',
    '~assets/scss/swiper.scss',
    '~assets/scss/style.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy',
    '@nuxt/http',
    '@nuxtjs/dotenv'
  ],
  proxy: {
    '/fr/api': {
      target: process.env.API_URL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
        ** You can extend webpack config here
        */
    extend (config) {
      if (!config.module) {
        return
      }

      const svgRule = config.module.rules.find(rule => rule.test instanceof RegExp && rule.test.test('.svg'))

      if (!svgRule) {
        return
      }

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader'
        ],
        exclude: [
          /@fortawesome[\\/]fontawesome-free[\\/]webfonts[\\/][^\\/]+\.svg$/
        ]
      })

      config.module.rules.push({
        test: /@fortawesome[\\/]fontawesome-free[\\/]webfonts[\\/][^\\/]+\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[path][name].[ext]'
            }
          }
        ]
      })
    }
  }
}
