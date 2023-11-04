import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const title = ref('Miao Li Han 喵立翰')


  return { title }
})