<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IFeature } from "~~/types/contentful";

const { block } = defineProps<{
  block: IFeature;
}>();

const { fields } = block;
</script>
