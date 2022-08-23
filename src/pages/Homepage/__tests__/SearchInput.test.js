import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/mock/BreedContextMock'
import SearchInput from '../components/SearchInput'

const MockSearchInput = () => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <SearchInput></SearchInput>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('SearchInput component tests', () => {
  test('check initial render', async () => {
    render(<MockSearchInput />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('check displayed breeds once focused', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    const options = await screen.findByText('Abyssinian')
    expect(options).toBeInTheDocument()
  })

  test('check change value once clicked breed', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    const options = await screen.findByText('Abyssinian')
    fireEvent.click(options)
    const newValue = await screen.findByRole('textbox', { target: { value: 'Abyssinian' } })
    expect(newValue).toBeInTheDocument()
  })

  test('check remove breeds once clicked breed', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    const options = await screen.findByText('Abyssinian')
    fireEvent.click(options)
    const noOptions = await screen.queryByTestId('breeds')
    expect(noOptions).not.toBeInTheDocument()
  })
})
