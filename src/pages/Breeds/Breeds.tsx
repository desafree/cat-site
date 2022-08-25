import Navigation from '../../components/shared/Navigation'
import BreedListStyled from '../../components/styled/BreedList.styled'
import useScrollToTop from '../../hooks/scrollToTop'
import LoadingStyled from '../../components/styled/Loading.styled'
import { useContext } from 'react'
import BreedContext from '../../context/BreedContext'

const BreedsPage = () => {
  const { stateFetch } = useContext(BreedContext)
  useScrollToTop()

  return (
    <>
      {stateFetch === 'loading' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'error' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'success' && (
        <>
          <Navigation></Navigation>
          <BreedListStyled></BreedListStyled>
        </>
      )}
    </>
  )
}

export default BreedsPage
