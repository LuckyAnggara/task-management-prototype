import MainPage from '../view/workspace/MainPage.vue'

export const workspaceRoutes = [
  {
    path: '/workspace',
    name: 'dashboard',
    component: MainPage,
    meta: {
      title: 'Dashboard',
      layout: 'layout-content',
    },
  },
]
