/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/mock/BreedContextMock'
import CatCategory from '../components/CatCategory'

const MockCatCategory = ({ list }) => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <CatCategory breed={{ temperament: list }}></CatCategory>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('catCategory component tests', () => {
  // mock fetch
  let originalFetch
  beforeEach(() => {
    originalFetch = global.fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 'xnzzM6MBI',
              url: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
              width: 2592,
              height: 1629,
            },
            {
              id: 'xnzzM6MBI',
              url: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
              width: 2592,
              height: 1629,
            },
          ]),
      }),
    )
  })

  afterEach(() => {
    global.fetch = originalFetch
  })
  // --------------
  test('no temperaments displayed', async () => {
    render(<MockCatCategory list='' />)
    const temperaments = screen.queryAllByTestId('temperament')
    expect(temperaments.length).toBe(0)
  })

  test('all temperaments displayed', async () => {
    render(<MockCatCategory list='Playful, Social, Intelligent, Curious, Friendly' />)
    const temperament1 = screen.getByText('Playful')
    const temperament2 = screen.getByText('Social')
    const temperament3 = screen.getByText('Intelligent')
    const temperament4 = screen.getByText('Curious')
    const temperament5 = screen.getByText('Friendly')
    expect(temperament1).toBeInTheDocument()
    expect(temperament2).toBeInTheDocument()
    expect(temperament3).toBeInTheDocument()
    expect(temperament4).toBeInTheDocument()
    expect(temperament5).toBeInTheDocument()
  })

  test('all temperaments displayed split by space', async () => {
    render(<MockCatCategory list='Playful Social Intelligent Curious Friendly' />)
    const temperament1 = screen.getByText('Playful')
    const temperament2 = screen.getByText('Social')
    const temperament3 = screen.getByText('Intelligent')
    const temperament4 = screen.getByText('Curious')
    const temperament5 = screen.getByText('Friendly')
    expect(temperament1).toBeInTheDocument()
    expect(temperament2).toBeInTheDocument()
    expect(temperament3).toBeInTheDocument()
    expect(temperament4).toBeInTheDocument()
    expect(temperament5).toBeInTheDocument()
  })

  test('all temperaments displayed split by space and comma', async () => {
    render(<MockCatCategory list='Playful,Social Intelligent,Curious Friendly' />)
    const temperament1 = screen.getByText('Playful')
    const temperament2 = screen.getByText('Social')
    const temperament3 = screen.getByText('Intelligent')
    const temperament4 = screen.getByText('Curious')
    const temperament5 = screen.getByText('Friendly')
    expect(temperament1).toBeInTheDocument()
    expect(temperament2).toBeInTheDocument()
    expect(temperament3).toBeInTheDocument()
    expect(temperament4).toBeInTheDocument()
    expect(temperament5).toBeInTheDocument()
  })

  test('all temperaments displayed split by space and comma in the correct number', async () => {
    render(<MockCatCategory list='Playful,Social Intelligent,Curious Friendly' />)
    const temperaments = screen.getAllByTestId('temperament')
    expect(temperaments.length).toBe(5)
  })
})
