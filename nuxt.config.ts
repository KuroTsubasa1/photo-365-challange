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
    pwa: {
        workbox: {
            enabled: true
        },
        meta: {
            name: '365 Photo Challenge',
            author: 'Lasse Harm',
            description: 'Lade jeden Tag ein neues Photo hoch und verbessere deine Photograpy Skills',
            lang: 'de'
        },
        manifest: {
            name: '365 Photo Challenge',
            short_name: '365 Photo',
            lang: 'de',
            description: 'Lade jeden Tag ein neues Photo hoch und verbessere deine Photograpy Skills',
        }
    },
    css: ['~/assets/styles/main.scss'],
    modules: [
        ['@nuxtjs/tailwindcss'],
        ['@kevinmarrec/nuxt-pwa'],
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
