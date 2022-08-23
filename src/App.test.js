import { render, screen } from '@testing-library/react'
import Header from './pages/Homepage/components/Header'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from './utils/mock/BreedContextMock'

test('prova', async () => {
  render(
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>,
  )
  const paragraph = screen.getByRole('button')
  expect(paragraph).toBeInTheDocument()
})
