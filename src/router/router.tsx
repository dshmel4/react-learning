import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { rootRoute } from 'router/routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route {...rootRoute} />,
    </>,
  ),
)
