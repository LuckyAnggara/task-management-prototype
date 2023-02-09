import MainPage from '../view/workspace/MainPage.vue'

export const workspaceRoutes = [
  {
    path: '/workspace',
    name: 'workspace',
    component: MainPage,
    meta: {
      title: 'Workspace',
      layout: 'layout-content',
    },
  },
]
