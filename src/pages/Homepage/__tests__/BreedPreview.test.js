import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
import BreedPreview from '../components/BreedPreview'

const MockBreedPreview = () => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <BreedPreview></BreedPreview>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('BreedPreview component tests', () => {
  test('check initial render', async () => {
    render(<MockBreedPreview />)
    const items = screen.getAllByTestId('item')
    expect(items.length).toBe(3)
  })

  test('check initial breeds', async () => {
    render(<MockBreedPreview />)
    const initialBreed1 = screen.getByText('Abyssinian')
    const initialBreed2 = screen.getByText('Aegean')
    const initialBreed3 = screen.getByText('American Bobtail')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> click next', async () => {
    render(<MockBreedPreview />)
    const nextButton = screen.getByTestId('next')
    fireEvent.click(nextButton)
    const newInitialBreed1 = screen.getByText('Aegean')
    const newInitialBreed2 = screen.getByText('American Bobtail')
    const newInitialBreed3 = screen.getByText('American Curl')
    expect(newInitialBreed1 && newInitialBreed2 && newInitialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> click prev', async () => {
    render(<MockBreedPreview />)
    const prevButton = screen.getByTestId('prev')
    fireEvent.click(prevButton)
    const newInitialBreed1 = screen.getByText('York Chocolate')
    const newInitialBreed2 = screen.getByText('Abyssinian')
    const newInitialBreed3 = screen.getByText('Aegean')
    expect(newInitialBreed1 && newInitialBreed2 && newInitialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> click prev and then next', async () => {
    render(<MockBreedPreview />)
    const prevButton = screen.getByTestId('prev')
    const nextButton = screen.getByTestId('next')
    fireEvent.click(prevButton)
    fireEvent.click(nextButton)
    const initialBreed1 = screen.getByText('Abyssinian')
    const initialBreed2 = screen.getByText('Aegean')
    const initialBreed3 = screen.getByText('American Bobtail')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> click next n times', async () => {
    render(<MockBreedPreview />)
    const nextButton = screen.getByTestId('next')
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton)
    }
    const initialBreed1 = screen.getByText('Australian Mist')
    const initialBreed2 = screen.getByText('Balinese')
    const initialBreed3 = screen.getByText('Bambino')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> click prev n times', async () => {
    render(<MockBreedPreview />)
    const prevButton = screen.getByTestId('prev')
    for (let i = 0; i < 7; i++) {
      fireEvent.click(prevButton)
    }
    const initialBreed1 = screen.getByText('Somali')
    const initialBreed2 = screen.getByText('Sphynx')
    const initialBreed3 = screen.getByText('Tonkinese')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> check restart functionality with next', async () => {
    render(<MockBreedPreview />)
    const nextButton = screen.getByTestId('next')
    for (let i = 0; i < 67; i++) {
      fireEvent.click(nextButton)
    }
    const initialBreed1 = screen.getByText('Abyssinian')
    const initialBreed2 = screen.getByText('Aegean')
    const initialBreed3 = screen.getByText('American Bobtail')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })

  test('check carousel functionality --> check restart functionality with prev', async () => {
    render(<MockBreedPreview />)
    const prevButton = screen.getByTestId('prev')
    for (let i = 0; i < 67; i++) {
      fireEvent.click(prevButton)
    }
    const initialBreed1 = screen.getByText('Abyssinian')
    const initialBreed2 = screen.getByText('Aegean')
    const initialBreed3 = screen.getByText('American Bobtail')
    expect(initialBreed1 && initialBreed2 && initialBreed3).toBeInTheDocument()
  })
})
