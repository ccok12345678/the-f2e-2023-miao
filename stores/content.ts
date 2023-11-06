import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const menuLink = ref<Link[]>([
    { url: '/news', title: '最新活動', text: '最新活動' },
    { url: '/donation', title: '小額捐款', text: '小額捐款' },
    { url: '/policy', title: '政策議題', text: '政策議題' }
  ])
  const footLinks = ref<Link[]>([
    { url: '/', title: '首頁', text: '首頁' },
    { url: '/news', title: '最新活動', text: '最新活動' },
    { url: '/policy', title: '政策議題', text: '政策議題' },
    { url: '/donation', title: '小額捐款', text: '小額捐款' }
  ])

  const contactInfo = ref<Contact[]>([
    { icon: 'location_on', info: '喵星區，毛茸茸大道88號，喵喵大樓3樓', type: 'address' },
    { icon: 'mail', info: 'meowoffice@linmeow.tw', type: 'mail'},
    { icon: 'call', info: '(02) 888-5678', type: 'phone'}
  ])

  const copyright = ref('© 2023 喵立翰 版權所有。')


  const homeHeaderTitles = ref([
    '台灣的明天，喵先鋪路！',
    '為喵星人，護台灣！'
  ])

  const candidateInfo = ref({
    name: '喵立翰',
    englishName: 'MIAO LI-HAN',
    description: '立法委員候選人'
  })

  return {
    menuLink, footLinks, contactInfo, copyright, homeHeaderTitles,
    candidateInfo
  }
})



type Link = {
  url: string,
  title: string,
  text: string
}

type Contact = {
  icon: string,
  info: string,
  type: string
}