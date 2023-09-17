// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/style/main.scss"],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
    {
      path: '~/sections',
      extensions: ['.vue'],
    },
  ],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500&family=Roboto:wght@400;500;700&display=swap"
      }
    ]
  }
})
