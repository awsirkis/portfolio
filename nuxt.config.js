if (process.env.NODE_ENV !== "production") require("dotenv").config();
const isServerlessEnvironment = !!process.env.NOW_REGION
export default {
  /*
  ** Headers of the page
  */
 devtools: true,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    components: true,
    title: 'Adam Sirkis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0' },
      {
        name: 'keywords', content: 'web, design, everett, wa'
      },
      {
        name: 'HandheldFriendly', content: 'true'
      },
      {
        name: 'http-equiv', content: "text/html; charset=utf-8"
      },
      {
        name: 'lang', content: 'en-US', class: 'supernova'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", integrity:"sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', crossorigin: 'anonymous'}
    ],
    script:[
      { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js", integrity:'sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4', crossorigin:'anonymous'}
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  serverMiddleware:[
    '~/api/index'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
 target:'server',
 ssr:true,
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/axios',
    '@nuxtjs/proxy'

  ],
  markdownit: {
    runtime: true // Support `$md()`
  },
  axios:{
    debug: false,
    proxy: true
  },
  sitemap:{
    hostname:'https://www.cascademaa.com',
    exclude:[
      '/admin/',
      '/resources'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
  },
  generate:{
    concurrency: 1,
    fallback: '/error/404',
    subFolders: false
  }
}
