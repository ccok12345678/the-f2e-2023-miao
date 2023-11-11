<script setup lang="ts">
const {
    homeHeaderTitles,
    candidateInfo,
    homeOpinion
  } = useContentStore()
const { logoImg } = useImgContentStore()

</script>

<template>
  <header class="text-center pt-[88px] header-home px-3 py-5">
    <div class="text-neutral-02 tracking-[8px] py-2">
      <h5 v-for="(title, index) in homeHeaderTitles" :key="index"
        class="py-3 md:text-3xl md:font-bold xl:text-[48px] xl:leading-normal">
        {{ title }}
      </h5>
    </div>

    <div class="mt-[78px] md:invisible sm:pb-6 md:pb-16">
      <img class="block mx-auto" :src="logoImg.zh.url" :alt="logoImg.zh.alt">
      <h6 class="my-4 leading-7">{{ candidateInfo.englishName }}</h6>
      <h6 class="my-4 leading-7">{{ candidateInfo.description }}</h6>
    </div>


  </header>

  <div class="flex justify-evenly px-3 py-5 md:-mt-[145px] 
    xl:-mt-[160px] 2xl:-mt-[175px] shadow-t-blur filter-header">
    <div class="flex-col gap-y-4 justify-center min-w-1/5 hidden md:flex">
      <img class="block mx-auto w-[200px] h-[69px]" :src="logoImg.zh.url" :alt="logoImg.zh.alt">
      <h5 class="tracking-[16px]">{{ candidateInfo.englishName }}</h5>
      <h5 class="tracking-[16px]">{{ candidateInfo.description }}</h5>
    </div>

    <section class="flex flex-col gap-y-3 md:gap-y-9 text-left md:w-1/3">
      <h4 class="tracking-[8px] text-base md:text-xl">{{ homeOpinion.title }}</h4>
      <div class="border border-dark border-solid w-[73%] md:w-[48%]"></div>
      <article v-for="(content, index) in homeOpinion.contents" :key="index">
        {{ content }}
      </article>
    </section>
  </div>
</template>

<style scoped>
  header.header-home {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/the-f2e-2023.appspot.com/o/f2e-miao%2Fhome_bg.webp?alt=media&token=8df12a98-9995-4d7a-bd3b-06bf32718733');
    background-size: cover;
    background-position: center;
  }

  .filter-header {
    background: linear-gradient(180deg, rgba(229, 215, 208, 0.00) 14.02%, #E3D2CB 41.78%, #E3D2CB 100%);
  }
</style>