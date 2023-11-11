import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const title = ref('喵立翰 MIAO LI-HAN')

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

  const homeOpinion = ref({
    title: '主張',
    contents: [
      '我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。',
      '因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。'
    ]
  })

  const news = ref<News>({
    title: '最新消息',
    contents : [
      {
        id: '1',
        date: '12 / 26',
        head: ['參與台北寵物論壇', '爭取貓咪友善環境'],
        content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
      },
      {
        id: '2',
        date: '12 / 26',
        head: ['掃街模式開啟！', '帶著你的貓耳，來和我一起走！'],
        content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。'
      },
      {
        id: '3',
        date: '12 / 26',
        head: ['收容所模特兒大比拼！'],
        content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
      },
      {
        id: '4',
        date: '12 / 26',
        head: ['貓星登場！'],
        content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
      }
    ]
  })

  const homePolices = ref({
    title: '政策議題',
    contents: [
      {
        icon: 'medical_services',
        content: ['為毛孩子謀福利！', '推動寵物醫療保障方案']
      },
      {
        icon: 'deck',
        content: ['打造休閒天堂！', '推廣寵物休閒與娛樂場所']
      },
      {
        icon: 'volunteer_activism',
        content: ['推廣寵物飼養教育', '讓愛更加專業']
      }
    ]
  })

  const donationSlogan = ref([
    '您的小筆捐款',
    '是每隻毛孩',
    '未來的大大動力！'
  ])

  return {
    title, menuLink, footLinks, contactInfo, copyright, homeHeaderTitles,
    candidateInfo, homeOpinion, news, homePolices, donationSlogan
  }
})

type News = {
  title : string,
  contents: {
    id: string,
    date: string,
    head: string[],
    content: string
  }[]
}

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