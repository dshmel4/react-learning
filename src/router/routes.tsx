import { Test } from 'pages/Test'
import { Route, RoutePaths } from 'router/routes.types'

export const rootRoute: Route = {
  path: RoutePaths.root,
  element: <Test />,
}

export const routes: Route[] = [
  {
    path: RoutePaths.test,
    element: <Test />,
  },
]
