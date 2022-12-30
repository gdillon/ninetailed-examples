import { Ninetailed } from "@ninetailed/experience.js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const ninetailed = new Ninetailed({
    clientId: config.public.NINETAILED_CLIENT_ID,
    environment: config.public.NINETAILED_ENVIRONMENT,
  });

  addRouteMiddleware(
    "ninetailed-page",
    () => {
      ninetailed.page();
    },
    { global: true }
  );

  return {
    provide: {
      ninetailed,
    },
  };
});
