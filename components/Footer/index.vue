<script lang="ts" setup>
  import { useContentStore } from '#imports'

  const { footLinks, contactInfo, copyright } = useContentStore()

</script>

<template>
  <footer class="flex justify-center py-5 px-3  bg-neutral-01 sm:py-10">

    <div>
      <nav class="border-b-2 border-dashed border-dark">
        <ul class="flex justify-between px-2">
          <li v-for="link in footLinks" :key="link.url">
            <NuxtLink :to="link.url" :title="link.title"
              class="inline-block px-1.5 pb-3 sm:pb-6 sm:px-[30px] sm:text-xl">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <ul class="my-6">
        <li v-for="(info, index) in contactInfo" :key="index"
          class="flex items-center sm:justify-center"
          :class="(info.type === 'mail' ? 'my-[10px]' : '')">
          <ShareIcon class="mr-[10px]">{{ info.icon }}</ShareIcon>
          <a v-if="info.type === 'phone'" :href="'tel:' + info.info">
            {{ info.info }}
          </a>
          <a v-else-if="info.type === 'mail'" :href="'mailto:' + info.info">
            {{ info.info }}
          </a>
          <a v-else href="javascript:void(0)">{{ info.info }}</a>
        </li>
      </ul>

      <div class="sm:text-center">{{ copyright }}</div>

    </div>
  </footer>
</template>