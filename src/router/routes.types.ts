import { ReactElement } from 'react'

export enum RoutePaths {
  root = '/',
  login = '/login',

  widgetGrid = '/app',
  test = '/test',
  notificationsLog = `${widgetGrid}/notificationsLog`,
  notificationsLimit = `${widgetGrid}/notificationsLimit`,
  notificationsLimitAll = `${widgetGrid}/notificationsLimitAll`,
  notificationsLimitStandard = `${widgetGrid}/notificationsLimitStandard`,
  notificationsLimitStandardAll = `${widgetGrid}/notificationsLimitStandardAll`,
  troubleTicketsLog = `${widgetGrid}/troubleTicketsLog`,
  widgetGridWidgets = `${widgetGrid}/widgets`,
  shareWidget = '/widgetCommon',
  shareWidgetCode = '/widgetCommon/:widgetCode',

  primitive = '/primitive',
  primitiveCreateGroup = `${primitive}/create-group`,
  primitiveCreateGroupWithParent = `${primitive}/create-group-with-parent`,

  noMatch = '*',
}
export interface Route {
  element: ReactElement
  path?: RoutePaths
  index?: boolean
}
