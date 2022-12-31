import contentful from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const client = contentful.createClient({
    space: config.public.CONTENTFUL_SPACE_ID,
    accessToken: config.public.CONTENTFUL_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});
