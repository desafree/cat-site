/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
import CatText from '../components/CatText'

const MockCatProfile = ({ breed }) => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <CatText breed={breed}></CatText>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

const breedMockup = {
  weight: {
    imperial: '7  -  10',
    metric: '3 - 5',
  },
  id: 'abys',
  name: 'Abyssinian',
  cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
  vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
  vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
  temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
  origin: 'Egypt',
  country_codes: 'EG',
  country_code: 'EG',
  description:
    'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
  life_span: '14 - 15',
  indoor: 0,
  lap: 1,
  alt_names: '',
  adaptability: 5,
  affection_level: 5,
  child_friendly: 3,
  dog_friendly: 4,
  energy_level: 5,
  grooming: 1,
  health_issues: 2,
  intelligence: 5,
  shedding_level: 2,
  social_needs: 5,
  stranger_friendly: 5,
  vocalisation: 1,
  experimental: 0,
  hairless: 0,
  natural: 1,
  rare: 0,
  rex: 0,
  suppressed_tail: 0,
  short_legs: 0,
  wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
  hypoallergenic: 0,
  reference_image_id: '0XYvRd7oD',
  image: {
    id: '0XYvRd7oD',
    width: 1204,
    height: 1445,
    url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  },
}

describe('catText component tests', () => {
  test('catText initial render', async () => {
    render(<MockCatProfile breed={breedMockup} />)
    const catText = screen.getByTestId('cat-text')
    expect(catText).toBeInTheDocument()
  })

  test('catText display correct text', async () => {
    render(<MockCatProfile breed={breedMockup} />)
    const catTextName = screen.getByText('Abyssinian')
    expect(catTextName).toBeInTheDocument()
  })

  test('catText display correct description', async () => {
    render(<MockCatProfile breed={breedMockup} />)
    const catTextDescription = screen.getByText(
      'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    )
    expect(catTextDescription).toBeInTheDocument()
  })

  test('catText display correct origin', async () => {
    render(<MockCatProfile breed={breedMockup} />)
    const catTextOrigin = screen.getByText('Egypt')
    expect(catTextOrigin).toBeInTheDocument()
  })

  test('catText display correct life span', async () => {
    render(<MockCatProfile breed={breedMockup} />)
    const catTextOrigin = screen.getByText('14 - 15 years')
    expect(catTextOrigin).toBeInTheDocument()
  })

  test('catText display correct values if properties not available', async () => {
    render(<MockCatProfile breed={{}} />)
    const catInvalidValues = screen.getAllByText('Not available')
    expect(catInvalidValues.length).toBe(4)
  })
})
