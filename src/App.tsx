import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import BreedPage from './pages/Breed/Breed'
import GlobalStyle from './components/styled/Global.styled'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/:breed' element={<BreedPage />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
