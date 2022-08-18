import HeaderStyled from '../../components/styled/Header.styled'
import BreedPreviewStyled from '../../components/styled/BreedPreview.styled'
import Info from './components/Info'
import LoadingStyled from '../../components/styled/Loading.styled'
import BreedContext from '../../context/BreedContext'
import { useContext } from 'react'
import useScrollToTop from '../../hooks/scrollToTop'
import Navigation from '../../components/shared/Navigation'

const Homepage = () => {
  useScrollToTop()
  const { stateFetch } = useContext(BreedContext)

  return (
    <>
      {stateFetch === 'loading' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'error' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'success' && (
        <>
          <Navigation></Navigation>
          <HeaderStyled></HeaderStyled>
          <BreedPreviewStyled></BreedPreviewStyled>
          <Info></Info>
        </>
      )}
    </>
  )
}

export default Homepage
