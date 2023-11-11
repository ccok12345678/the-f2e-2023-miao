<script lang="ts" setup>
  import { onClickOutside,   } from '@vueuse/core'

  const { logoImg } = useImgContentStore()
  const { menuLink, title } = useContentStore()

  const isMenuActive = ref(false)
  const menuMobile = ref<HTMLElement | null>(null)
  function toggleMenu() {
    if (isMenuActive.value) {
      menuMobile.value?.setAttribute('none-active', '' )
      isMenuActive.value = false
    } else {
      menuMobile.value?.removeAttribute('none-active')
      isMenuActive.value = true
    }
  }



  onClickOutside(menuMobile, ({ target }) => {
    if (!menuMobile.value?.hasAttribute('none-active')) {
      menuMobile.value?.setAttribute('none-active', '')
      isMenuActive.value = false
    }
  })

</script>

<template>
  <nav class="bg-transparent">
    <div class="fixed top-0 left-0 right-0 flex bg-transparent  backdrop-blur-sm">

      <a v-if="!isMenuActive" href="javascript:void(0)" title="menu" @click="toggleMenu()" class="m-3 mr-[-35px] sm:hidden">
        <ShareMenuIcon />
      </a>

      <a v-else href="javascript:void(0)" title="menu" class="m-3 mr-[-35px] sm:hidden">
        <ShareMenuIcon />
      </a>

      <NuxtLink to="/" class="inline-block p-[3px] m-auto">
        <h1 class="hidden">{{ title }}</h1>
        <img :src="logoImg.zh.url" :alt="logoImg.zh.alt" class="w-32 h-[34px] sm:w-40 sm:h-[46px]">
        <img :src="logoImg.en.url" :alt="logoImg.en.alt" class="w-[123px] h-5 sm:w-[162px]">
      </NuxtLink>

      <ul class="sm:flex mx-auto hidden">
        <li v-for="link in menuLink" :key="link.url" class="flex items-center">
          <NuxtLink :to="link.url" :title="link.title"
            class="text-2xl px-3">
            {{ link.text }}</NuxtLink>
        </li>
      </ul>

    </div>

    <ul ref="menuMobile" class="fixed top-[60px] right-0 left-0 bg-neutral-01 text-center pt-4 pb-4
      overflow-hidden transition-all h-[140px] sm:hidden" none-active @click="toggleMenu()">
      <li v-for="link in menuLink" :key="link.url">
        <NuxtLink :to="link.url" :title="link.title" class="block pt-1 pb-1">{{ link.text }}</NuxtLink>
      </li>
    </ul>

  </nav>
</template>

<style scoped>
[none-active] {
  height: 0;
  padding: 0;
}
</style>
