<script setup lang="ts">
  defineProps<{
    news: NewsItem
  }>()

  type NewsItem = {
    id: string,
    date: string,
    head: string[],
    content: string
  }

</script>

<template>
  <section class="flex flex-col items-center gap-y-3">
    <div class="w-16 h-16 bg-primary text-neutral-01 flex flex-col justify-center">
      <h5 class="outlined" :data-id="news.id">{{ news.id }}</h5>
      <div>{{ news.date }}</div>
    </div>

    <h6 v-for="(item, index) in news.head" :key="index">{{ item }}</h6>

    


</section>
</template>

<style scoped>
  .outlined {
    @apply relative z-[1] before:content-[attr(data-id)] before:z-[-1] before:top-0 ;
    @apply before:absolute before:right-1/2 before:translate-x-1/2;
  }

  .outlined::before {
    -webkit-text-stroke: 5px #454545;
    text-stroke: 5px #454545;
  }
</style>

