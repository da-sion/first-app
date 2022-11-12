// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: '123',
        public:{
            apiBase: '/api'
        }
    }
})
