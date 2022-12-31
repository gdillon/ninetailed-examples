<template>
  <h1>{{ fields.internalName }}</h1>
</template>

<script setup lang="ts">
import { IForm } from "~~/types/contentful";

const { block } = defineProps<{
  block: IForm;
}>();

const { fields } = block;
</script>
