import { defineNuxtPlugin } from "#app";

// for dev
import { createClient } from "contentful";

// for SSR, SSG
import contentful from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const createClientFunc =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;
  const client = createClientFunc({
    space: config.public.CONTENTFUL_SPACE_ID,
    accessToken: config.public.CONTENTFUL_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});
