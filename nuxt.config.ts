// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@vercel/analytics/nuxt'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'it'
      },
      title: 'Pedro - Confronto Prezzi Supermercati | 60+ Catene Italiane',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Pedro confronta i prezzi dei supermercati: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila e altre 50+ catene italiane. Gratis, iPhone e Android.'
        },
        { name: 'keywords', content: 'confronto prezzi supermercati, confronta prezzi supermercati, confronto prezzi spesa, app confronto prezzi, prezzi supermercati a confronto, app per la spesa, app per fare la spesa, migliore app spesa, app risparmio spesa, app spesa gratis, app spesa italia, risparmio spesa settimanale, lista della spesa, app lista della spesa, lista spesa, risparmio spesa, app spesa, esselunga prezzi, conad prezzi, coop prezzi, carrefour prezzi, lidl prezzi, eurospin prezzi, pam prezzi, bennet prezzi, famila prezzi, md prezzi, despar prezzi, iper prezzi, decò prezzi, unes prezzi, basko prezzi, spesa online, prezzi supermercati, confronta prezzi, risparmiare sulla spesa, dove conviene fare la spesa, supermercato piu economico' },
        { name: 'author', content: 'Pedro App' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

        // Search engine verification
        { name: 'google-site-verification', content: 'dgk8b3WDUYBbW4u_f2TRhASefVFqHD_lth_yzCqOVyk' },
        { name: 'msvalidate.01', content: '827E179B1560D91069A590551E09CF90' },

        // Geo meta tags
        { name: 'geo.region', content: 'IT' },
        { name: 'geo.placename', content: 'Italia' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pedroshoppinglist.app' },
        { property: 'og:title', content: 'Pedro - Confronto Prezzi Supermercati Gratis' },
        { property: 'og:description', content: 'Confronto prezzi tra 60+ catene di supermercati italiani: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila e altre. Paga meno la spesa.' },
        { property: 'og:image', content: 'https://pedroshoppinglist.app/og-image.png' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:site_name', content: 'Pedro' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://pedroshoppinglist.app' },
        { name: 'twitter:title', content: 'Pedro - Confronto Prezzi Supermercati | 60+ Catene Italiane' },
        { name: 'twitter:description', content: 'Confronto prezzi tra 60+ catene di supermercati italiani. Gratis, iPhone e Android.' },
        { name: 'twitter:image', content: 'https://pedroshoppinglist.app/og-image.png' },

        // App Links
        { name: 'apple-itunes-app', content: 'app-id=6759045839' },
        { name: 'google-play-app', content: 'app-id=com.bervifix.pedro' },

        // Theme
        { name: 'theme-color', content: '#6366F1' },
        { name: 'msapplication-TileColor', content: '#6366F1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://pedroshoppinglist.app' },
        { rel: 'alternate', hreflang: 'it', href: 'https://pedroshoppinglist.app' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://pedroshoppinglist.app' },
        { rel: 'author', href: '/llms.txt', type: 'text/plain' }
      ]
    }
  },

  googleFonts: {
    families: {
      'Lexend': [400, 500, 600, 700],
      'Inter': [400, 500, 600, 700]
    },
    display: 'swap',
    preload: true,
    download: true,
    base64: false
  },

  site: {
    url: 'https://pedroshoppinglist.app',
    name: 'Pedro - Confronto Prezzi Supermercati e Lista della Spesa'
  },

  sitemap: {
    strictNuxtContentPaths: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/status', changefreq: 'daily', priority: 0.6 },
      { loc: '/privacy', changefreq: 'yearly', priority: 0.3 },
      { loc: '/terms', changefreq: 'yearly', priority: 0.3 },
      { loc: '/cookies', changefreq: 'yearly', priority: 0.3 }
    ]
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Pedro',
      url: 'https://pedroshoppinglist.app',
      logo: 'https://pedroshoppinglist.app/logo.png'
    }
  },

  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg']
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/status': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/cookies': { prerender: true }
  }
})
