<template>
  <h1>{{ fields.internalTitle }}</h1>
</template>

<script setup lang="ts">
import { IFooter } from "~~/types/contentful";

const { block } = defineProps<{
  block: IFooter;
}>();

const { fields } = block;
</script>
