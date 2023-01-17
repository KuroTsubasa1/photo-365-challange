// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app:
        {
            head: {
                title: "📷",
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                ],
            },
        },
    css: ['~/assets/styles/main.scss'],
    modules: [
        ['nuxt-icon'],
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
