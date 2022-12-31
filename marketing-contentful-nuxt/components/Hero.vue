<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IHero } from "~~/types/contentful";

const { block } = defineProps<{
  block: IHero;
}>();

const { fields } = block;
</script>
