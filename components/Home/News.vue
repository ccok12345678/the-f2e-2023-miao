<script setup lang="ts">
  const { news } = useContentStore()

  const firstNews = news.contents[0]
</script>

<template>
  <div class="bg-neutral-01 mt-[45px] py-5 px-3 text-center relative triangle-mobile">
    <header class="text-xl mb-10">
      <span v-for="(letter, index) in news.title" :key="index"
        class="tracking-[16px] last:tracking-normal">
        {{ letter }}
      </span>
    </header>

    <NewsCard :news="firstNews"/>

  </div>
</template>

<style scoped>
  .triangle-mobile::after {
    content: "";
    @apply bg-transparent absolute -top-12 right-1/2 translate-x-1/2
      border-t-0 border-neutral-01 border-l-[30px] border-r-[30px] border-b-[52.2px]
      border-l-transparent border-r-transparent
  }
</style>