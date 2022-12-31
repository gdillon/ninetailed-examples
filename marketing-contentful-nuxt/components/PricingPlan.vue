<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IPricingPlan } from "~~/types/contentful";

const { block } = defineProps<{
  block: IPricingPlan;
}>();

const { fields } = block;
</script>
