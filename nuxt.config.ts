// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: '123',
        public:{
            apiBase: '/api'
        }
    },
    css: ['~/assets/styles/main.scss'],
    modules: [
        // ...
        [
          '@pinia/nuxt',
          {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
      ],
})
