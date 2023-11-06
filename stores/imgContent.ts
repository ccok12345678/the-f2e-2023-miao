import { defineStore } from 'pinia'

export const useImgContentStore = defineStore('img-store', () => {
  const logoImg = ref<LogoImg>({
    zh: {
      url: "https://xlwxkkvvnwuiiwjlmytd.supabase.co/storage/v1/object/sign/The%20F2E%202023/MiaoLiHan/logo-zh.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUaGUgRjJFIDIwMjMvTWlhb0xpSGFuL2xvZ28temguc3ZnIiwiaWF0IjoxNjk5MDgwODUwLCJleHAiOjIwMTQ0NDA4NTB9.rcEzyOHMojDUY2VC7iLld9AQEQPV2QGaSVV8f1tJyMc",
      alt: "喵立翰 Logo"
    },
    en: {
      url: "https://xlwxkkvvnwuiiwjlmytd.supabase.co/storage/v1/object/sign/The%20F2E%202023/MiaoLiHan/logo-en.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUaGUgRjJFIDIwMjMvTWlhb0xpSGFuL2xvZ28tZW4uc3ZnIiwiaWF0IjoxNjk5MDgwODUzLCJleHAiOjIwMTQ0NDA4NTN9.hxnu3CtprySZXpBnP-qhZH8YeGtGysL_Lxa_d127fHc",
      alt: "Miao Li-Han Logo"
    }
  })

  const homeHeaderImg = ref<ImgInfo>({
    url: "https://xlwxkkvvnwuiiwjlmytd.supabase.co/storage/v1/object/public/The%20F2E%202023/MiaoLiHan/home.jpg",
    alt: "home header image"
  })

  return {
    logoImg, homeHeaderImg
  }
})


type LogoImg = {
  zh: ImgInfo,
  en: ImgInfo
}

type ImgInfo = {
  url: string,
  alt: string
}