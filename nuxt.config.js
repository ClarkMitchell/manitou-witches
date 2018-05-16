const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/manitou-witches/'
    }
  } : {}

module.exports = {
    ...routerBase,
    mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'manitou-witches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'There are witches in Manitou.' }
    ],
    script: [
        { innerHTML: `
            (function() {
                var trial = document.createElement('script');
                trial.type = 'text/javascript';
                trial.async = true;
                trial.src = 'https://easy.myfonts.net/v2/js?sid=138717(font-family=Witchfinder+Demons)&sid=138720(font-family=Witchfinder+Icons)&sid=138728(font-family=Witchfinder+Script+Old)&key=p9u7LhWiZW';
                var head = document.getElementsByTagName("head")[0];
                head.appendChild(trial);
            })();
        ` }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  css: [
    '@assets/animate.min.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
