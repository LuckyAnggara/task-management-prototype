import MainPage from '../view/workspace/MainPage.vue'

export const boardRoutes = [
  {
    path: '/board',
    name: 'board',
    component: MainPage,
    meta: {
      title: 'Board',
      layout: 'layout-content',
    },
  },
]
