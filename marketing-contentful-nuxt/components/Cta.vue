<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { ICta } from "~~/types/contentful";

const { block } = defineProps<{
  block: ICta;
}>();

const { fields } = block;
</script>
