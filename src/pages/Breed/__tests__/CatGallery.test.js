/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
import CatGallery from '../components/CatGallery'

const MockCatGallery = () => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <CatGallery></CatGallery>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('catGallery component tests', () => {
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
  test('displayed photo', async () => {
    render(<MockCatGallery />)
    const gallery = await screen.findAllByTestId('gallery-item')
    expect(gallery.length > 0).toBeTruthy()
  })
  test('displayed correct number of photo', async () => {
    render(<MockCatGallery />)
    const gallery = await screen.findAllByTestId('gallery-item')
    expect(gallery.length).toBe(2)
  })
})
