import { fireEvent, render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
import BreedList from '../components/BreedList'

const MockBreedList = () => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <BreedList></BreedList>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('BreedList component tests', () => {
  test('check initial render', async () => {
    render(<MockBreedList />)
    const firstItem = screen.getByText('1. Abyssinian')
    expect(firstItem).toBeInTheDocument()
  })

  test('check initial pagination', async () => {
    render(<MockBreedList />)
    const pagination = screen.getAllByTestId('pagination-item')
    expect(pagination.length).toBe(7)
  })

  test('check pagination functionality', async () => {
    render(<MockBreedList />)
    const page2Button = screen.getByText('2')
    fireEvent.click(page2Button)
    const secondItem = screen.getByText('11. Bengal')
    expect(secondItem).toBeInTheDocument()
  })

  test('check pagination functionality last item', async () => {
    render(<MockBreedList />)
    const pagesButton = screen.getAllByRole('button')
    fireEvent.click(pagesButton[pagesButton.length - 1])
    const lastItem = screen.getByText('67. York Chocolate')
    expect(lastItem).toBeInTheDocument()
  })

  test('check pagination functionality: next and back', async () => {
    render(<MockBreedList />)
    const pagesButton = screen.getAllByRole('button')
    fireEvent.click(pagesButton[2])
    fireEvent.click(pagesButton[0])
    const firstItem = screen.getByText('1. Abyssinian')
    expect(firstItem).toBeInTheDocument()
  })

  test('check pagination functionality: active page', async () => {
    render(<MockBreedList />)
    const pagesButton = screen.getAllByRole('button')
    fireEvent.click(pagesButton[2])
    expect(pagesButton[2]).toHaveClass('active')
  })

  test('check pagination functionality: remove active page when changed', async () => {
    render(<MockBreedList />)
    const pagesButton = screen.getAllByRole('button')
    fireEvent.click(pagesButton[2])
    fireEvent.click(pagesButton[3])
    expect(pagesButton[2]).not.toHaveClass('active')
  })

  test('check pagination functionality: remove active page when changed and new active', async () => {
    render(<MockBreedList />)
    const pagesButton = screen.getAllByRole('button')
    fireEvent.click(pagesButton[2])
    fireEvent.click(pagesButton[3])
    expect(pagesButton[3]).toHaveClass('active')
  })
})
