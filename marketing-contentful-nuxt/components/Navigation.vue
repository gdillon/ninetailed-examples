<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="flex justify-between items-center w-full py-6 border-b-2 border-gray-100"
      >
        <div class="flex justify-start">
          <NuxtLink href="/">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <nuxt-img src="/logo.svg" width="175" height="57" alt="Logo" />
            </a>
          </NuxtLink>
        </div>

        <div class="flex justify-start">
          <div class="hidden lg:flex">
            <div
              v-for="link in fields.navigationLinks"
              :key="link.sys.id"
              class="px-5 py-2"
            >
              <button
                v-if="!link.fields.slug"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {{ link.fields.buttonText }}
              </button>
              <NuxtLink
                v-else
                :to="link.fields.slug"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <a
                  class="text-base font-medium text-gray-500 hover:text-gray-900"
                  :href="link.fields.slug"
                >
                  {{ link.fields.buttonText }}
                </a>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="ml-10 space-x-4">
          <button
            class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
          >
            Sign in
          </button>
          <button
            class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Sign up
          </button>
        </div>
      </div>

      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <div
          v-for="link in fields.navigationLinks"
          :key="link.sys.id"
          class="px-5 py-2"
        >
          <button
            v-if="!link.fields.slug"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {{ link.fields.buttonText }}
          </button>
          <NuxtLink v-else :to="link.fields.slug">
            <a
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              :href="link.fields.slug"
            >
              {{ link.fields.buttonText }}
            </a>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { INavigation } from "~/types/contentful";

const { block } = defineProps<{
  block: INavigation;
}>();

const { fields } = block;
</script>
