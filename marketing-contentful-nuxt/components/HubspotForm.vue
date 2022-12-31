<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IHubspotForm } from "~~/types/contentful";

const { block } = defineProps<{
  block: IHubspotForm;
}>();

const { fields } = block;
</script>
