<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IPricingTable } from "~~/types/contentful";

const { block } = defineProps<{
  block: IPricingTable;
}>();

const { fields } = block;
</script>
