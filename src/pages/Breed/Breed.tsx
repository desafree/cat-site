import CatInfoStyled from '../../components/styled/CatInfo.styled'
import CatGalleryStyled from '../../components/styled/CatGallery.styled'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingStyled from '../../components/styled/Loading.styled'
import BreedContext from '../../context/BreedContext'
import useScrollToTop from '../../hooks/scrollToTop'
import Navigation from '../../components/shared/Navigation'

const BreedPage = () => {
  useScrollToTop()
  const params = useParams()
  const { breeds, stateFetch } = useContext(BreedContext)

  const breed = breeds.find((breed) => {
    if (breed.id === params.breed) return true
  })

  return (
    <>
      {stateFetch === 'loading' && <LoadingStyled />}
      {stateFetch === 'loading' && <LoadingStyled></LoadingStyled>}
      {stateFetch === 'success' && breed && (
        <>
          <Navigation></Navigation>
          <CatInfoStyled breed={breed}></CatInfoStyled>
          <CatGalleryStyled></CatGalleryStyled>
        </>
      )}
    </>
  )
}

export default BreedPage
