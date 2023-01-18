<template>
  <div>
    <h1>This is a demo of a simple landing page</h1>
    <p>
      The current page slug is
      <span class="text-indigo-500 font-bold">{{ $route.params.slug }}</span>
    </p>
    <div className="flex flex-col">
      <BlockRenderer v-if="banner" :block="banner" />
      <BlockRenderer v-if="navigation" :block="navigation" />
      <main>
        <BlockRenderer v-if="sections.length" :block="sections" />
      </main>
      <BlockRenderer v-if="footer" :block="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPage } from "~~/types/contentful";

const { $contentfulClient } = useNuxtApp();

const route = useRoute();
const { slug } = route.params;

const { data } = await useAsyncData(
  slug as string,
  async () => {
    return await $contentfulClient.getEntries({
      content_type: "page",
      "fields.slug[in]": (slug as string) === "" ? "/" : (slug as string),
      limit: 1,
      include: 10,
    });
  },
  { watch: [route] }
);

if (!data.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Couldn't Get Data From Contentful",
  });
}

if (data.value.items.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: "Could Not Find Page",
  });
}

const entry = data.value.items[0] as IPage;

const { title, description, no_follow, no_index } = {
  ...entry.fields.seo?.fields,
};

const robotsMeta = [
  `${no_follow ? "nofollow" : ""}`,
  `${no_index ? "noindex" : ""}`,
]
  .filter(Boolean)
  .join(",");

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { name: "robots", content: robotsMeta },
  ],
});

const {
  banner,
  navigation,
  sections = [],
  footer,
} = entry.fields.content.fields;
</script>
