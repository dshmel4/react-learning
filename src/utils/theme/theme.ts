import { DefaultTheme } from 'styled-components'
import { OFFSET_MULTIPLIER } from 'constants/theme'
import { colors } from './colors'

export const theme: DefaultTheme = {
  space: Array.from({ length: 32 }, (_, i) => i * OFFSET_MULTIPLIER),
  colors,
}
