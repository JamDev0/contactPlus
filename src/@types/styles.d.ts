import 'styled-components'

import { defaultTheme } from '../styles/themes/defaultTheme'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}