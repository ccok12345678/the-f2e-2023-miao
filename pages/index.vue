<script setup lang="ts">
import { useContentStore, useImgContentStore } from '#imports';

const { homeHeaderTitles, candidateInfo } = useContentStore()
const { logoImg, homeHeaderImg } = useImgContentStore()

</script>

<template>
  <div class="bg-neutral-03 h-full">
    <!-- <div class="bg-gradient-to-r from-[#9bb6bf] to-[#abc2ca] py-11"></div> -->
    <header class="text-center pt-[88px] header-home">
      <div class="text-neutral-02 tracking-[8px] py-2">
        <h5 v-for="(title, index) in homeHeaderTitles" :key="index" class="py-3">
          {{ title }}
        </h5>
      </div>

      <div class="mt-[78px]">
        <img class="block mx-auto" :src="logoImg.zh.url" :alt="logoImg.zh.alt">
        <h6 class="my-4 leading-7">{{ candidateInfo.englishName }}</h6>
        <h6 class="my-4 leading-7">{{ candidateInfo.description }}</h6>
      </div>
    </header>


  </div>
</template>

<style scoped>
header.header-home {
  background-image: url('https://xlwxkkvvnwuiiwjlmytd.supabase.co/storage/v1/object/public/The%20F2E%202023/MiaoLiHan/home_mobile.jpeg');
  background-size: 100% auto;
  background-position: 50% 42%;
}
</style>