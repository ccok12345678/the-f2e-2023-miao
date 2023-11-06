<script setup lang="ts">
import { useContentStore } from './stores/content'

const { title } = useContentStore()

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
./stores/content.js