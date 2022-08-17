import HeaderStyled from '../../components/styled/Header.styled'
import BreedPreviewStyled from '../../components/styled/BreedPreview.styled'
import Info from './components/Info'
import LoadingStyled from '../../components/styled/Loading.styled'
import BreedContext from '../../context/BreedContext'
import { useContext } from 'react'
import useScrollToTop from '../../hooks/scrollToTop'

const Homepage = () => {
  useScrollToTop()
  const { stateFetch } = useContext(BreedContext)

  return (
    <>
      {stateFetch === 'loading' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'success' && (
        <>
          <HeaderStyled></HeaderStyled>
          <BreedPreviewStyled></BreedPreviewStyled>
          <Info></Info>
        </>
      )}
    </>
  )
}

export default Homepage
