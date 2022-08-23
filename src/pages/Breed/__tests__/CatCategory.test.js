/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/mock/BreedContextMock'
import CatCategory from '../components/CatCategory'
import CatGallery from '../components/CatGallery'

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

  test('prova2', async () => {
    render(<MockCatCategory list='nico,simo' />)
    screen.debug()
    const temperaments = screen.getByText('nico')
    expect(temperaments).toBeInTheDocument()
  })

  test('prova3', async () => {
    render(<MockCatCategory list='nico,simo' />)

    const temperaments = screen.queryByText('bla')
    expect(temperaments).not.toBeInTheDocument()
  })

  test('prova3', async () => {
    render(<CatGallery />)
    const images = await screen.findAllByTestId('prova')
    expect(images.length).toBe(2)
  })
})
