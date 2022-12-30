// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  generate: {
    routes: ["/", "/pricing", "/employee-management", "/compensation"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
      NINETAILED_CLIENT_ID: process.env.NINETAILED_CLIENT_ID,
      NINETAILED_ENVIRONMENT: process.env.NINETAILED_ENVIRONMENT,
      NINETAILED_MANAGEMENT_CLIENT_ID:
        process.env.NINETAILED_MANAGEMENT_CLIENT_ID,
      NINETAILED_MANAGEMENT_SECRET: process.env.NINETAILED_MANAGEMENT_SECRET,
    },
  },
  // FIXME: This seems to be required due to the diary dependency not knowing about the Vite bundler
  vite: {
    define: {
      "process.env": {},
    },
  },
});
