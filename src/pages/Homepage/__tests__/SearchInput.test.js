import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
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

  test('check correct displayed breeds with input', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Siamese' } })
    const option = await screen.findByText('Siamese')
    expect(option).toBeInTheDocument()
  })

  test('check correct displayed breeds with partial value', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Siam' } })
    const option = await screen.findByText('Siamese')
    expect(option).toBeInTheDocument()
  })

  test('check correct displayed breeds with lowercase value', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'siam' } })
    const option = await screen.findByText('Siamese')
    expect(option).toBeInTheDocument()
  })

  test('check correct displayed breeds with lowercase value and space', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'siam  ' } })
    const option = await screen.findByText('Siamese')
    expect(option).toBeInTheDocument()
  })

  test('check change value once clicked breed found', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'siam' } })
    const option = await screen.findByText('Siamese')
    fireEvent.click(option)
    const newValue = await screen.findByRole('textbox', { target: { value: 'Siamese' } })
    expect(newValue).toBeInTheDocument()
  })

  test('check correct displayed breeds with spaced breed', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'American Bobtail' } })
    const option = await screen.findByText('American Bobtail')
    expect(option).toBeInTheDocument()
  })

  test('check correct displayed breeds with spaced breed without space', async () => {
    render(<MockSearchInput />)
    const input = screen.getByPlaceholderText('Enter your breed')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'AmericanBobtail' } })
    const option = screen.queryByText('American Bobtail')
    expect(option).not.toBeInTheDocument()
  })
})
