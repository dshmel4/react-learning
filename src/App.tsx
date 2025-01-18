import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from 'router'
import { theme } from 'utils/theme/theme'
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </ThemeProvider>
)

export default App
