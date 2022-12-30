<template>
  <h1>{{ fields.internalTitle }}</h1>
</template>

<script setup lang="ts">
import { INavigation } from "~~/types/contentful";

const { block } = defineProps<{
  block: INavigation;
}>();

const { fields } = block;
</script>
