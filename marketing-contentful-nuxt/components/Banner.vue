<template>
  <h1>{{ fields.internalTitle }}</h1>
</template>

<script setup lang="ts">
import { IBanner } from "~~/types/contentful";

// TODO: In this and all other components, can't use an interface directly as the generic to defineProps.
// Nesting underneath a property works though: https://github.com/vuejs/core/issues/4294#issuecomment-1364746388
const { block } = defineProps<{
  block: IBanner;
}>();

const { fields } = block;
</script>
