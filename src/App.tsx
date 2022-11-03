import { ThemeProvider } from 'styled-components'

import { ContactsListProvider } from './hooks/useContactsList'

import { Home } from './pages/Home'

import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContactsListProvider>
        <GlobalStyles />

        <Home />
      </ContactsListProvider>
    </ThemeProvider>
  )
}
