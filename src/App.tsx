import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import BreedPage from './pages/Breed/Breed'
import GlobalStyle from './components/styled/Global.styled'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Layout from './components/styled/Layout.styled'
import Footer from './components/shared/Footer'
import { BreedContextProvider } from './context/BreedContext'
import BreedsPage from './pages/Breeds/Breeds'
import gsap from 'gsap'

gsap.config({ nullTargetWarn: false })

function App() {
  return (
    <>
      <BreedContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/breeds' element={<BreedsPage />}></Route>
              <Route path='/:breed' element={<BreedPage />}></Route>
            </Routes>
            <Footer></Footer>
          </Layout>
        </ThemeProvider>
      </BreedContextProvider>
    </>
  )
}

export default App
