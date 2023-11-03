import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const title = ref('Miao Li Han')


  return { title }
})