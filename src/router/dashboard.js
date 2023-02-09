import MainPage from '../view/dashboard/MainPage.vue'

export const dashboardRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: MainPage,
    meta: {
      title: 'Dashboard',
      layout: 'layout-content',
    },
  },
]
