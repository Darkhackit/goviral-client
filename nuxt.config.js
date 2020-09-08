
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' }
    ],
    script: [
      {src: 'https://unpkg.com/element-ui/lib/index.js'},
      {src: "/js/vendor/modernizr-3.6.0.min.js", defer: true ,body:true },
      {src: "/js/vendor/jquery-3.3.1.min.js" , defer: true,body:true  },
      {src: "/js/vendor/popper.min.js" , defer: true,body:true  },
      {src: "/js/vendor/bootstrap.min.js" , defer: true,body:true  },
      {src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" ,defer: true ,body:true },
      {src: "/js/plugins/slick.min.js" , defer: true,body:true  },
      {src: "/js/plugins/nice-select.min.js" , defer: true ,body:true },
      {src: "/js/plugins/plyr.min.js" , defer: true,body:true  },
      {src: "/js/plugins/plyr.min.js" , defer: true,body:true  },
      {src: "/js/plugins/perfect-scrollbar.min.js" , defer: true,body:true  },
      {src: "/js/plugins/lightgallery-all.min.js" , defer: true,body:true  },
      {src: "/js/plugins/imagesloaded.pkgd.min.js" , defer: true,body:true  },
      {src: "/js/plugins/isotope.pkgd.min.js" , defer: true,body:true  },
      {src: "/js/main.js" , defer: true ,body:true },
    ]
  },
  /*
  ** Global CSS
  */
  css: [

    '@/assets/scss/main.scss',

  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/vform',
    '~components/_global',
    '~plugins/element-ui',
    '~plugins/file-pond-plugin.js',
    { src: '~/plugins/VueTagsInpu', ssr: false }

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/router',

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/login', method: 'post', propertyName: 'token' },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/me', method: 'get', propertyName: 'data' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
},
axios:{

  baseUrl: process.env.API_URL
},

  build: {

    vendor: ['@johmun/vue-tags-input'],
  }
}
