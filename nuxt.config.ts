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
  ]
})
