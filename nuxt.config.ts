// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:
    {
        head: {
            title: "📷",
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
          },
    },
    css: ['~/assets/styles/main.scss'],
    
})
