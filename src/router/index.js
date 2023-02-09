import { dashboardRoutes } from './dashboard'
import { workspaceRoutes } from './workspace'
import { boardRoutes } from './board'

export const routes = [...dashboardRoutes, ...workspaceRoutes, ...boardRoutes]
