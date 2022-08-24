/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import BreedContextMockProvider from '../../../utils/tests/mock/BreedContextMock'
import CharacteristicItem from '../components/CharacteristicItem'

const MockCharacteristicItem = ({ title, intensity }) => {
  return (
    <BrowserRouter>
      <BreedContextMockProvider>
        <ThemeProvider theme={theme}>
          <CharacteristicItem title={title} intensity={intensity}></CharacteristicItem>
        </ThemeProvider>
      </BreedContextMockProvider>
    </BrowserRouter>
  )
}

describe('CharacteristicItem component tests', () => {
  test('CharacteristicItem initial render', async () => {
    render(<MockCharacteristicItem title='prova' intensity={5} />)
    const title = screen.getByText('prova:')
    expect(title).toBeInTheDocument()
  })

  test('CharacteristicItem display correct title', async () => {
    render(<MockCharacteristicItem title='Stranger friendly' intensity={5} />)
    const title = screen.getByText('Stranger friendly:')
    expect(title).toBeInTheDocument()
  })

  test('CharacteristicItem handle <0 value', async () => {
    render(<MockCharacteristicItem title='Stranger friendly' intensity={-2} />)
    const container = screen.getByTestId('container')
    expect(container.getElementsByClassName('active1').length).toBe(5)
  })

  test('CharacteristicItem handle >5 value', async () => {
    render(<MockCharacteristicItem title='Stranger friendly' intensity={6} />)
    const container = screen.getByTestId('container')
    expect(container.getElementsByClassName('active5').length).toBe(5)
  })
})
