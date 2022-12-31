<template>
  <div>
    <h1>Hello World!</h1>
    <div v-if="profile && profile.status !== 'loading'">
      {{ JSON.stringify(profile) }}
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const profile = useProfile();
</script>
