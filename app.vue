<script setup lang="ts">
import { useContentStore } from './stores/content'

const { title } = useContentStore()

</script>

<template>
  <div>
    <h1 class="text-slate-500 text-xl">{{ title }}</h1>
    <span class="material-symbols-outlined">call</span>
  </div>
</template>
./stores/content.js