import CatInfoStyled from '../../components/styled/CatInfo.styled'
import CatGalleryStyled from '../../components/styled/CatGallery.styled'
import { useState, useEffect } from 'react'
import ApiBreedResponseType from '../../typescript/interfaces/ApiBreedResponse'
import { useParams } from 'react-router-dom'

const BreedPage = () => {
  const [breed, setBreed] = useState<ApiBreedResponseType>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params = useParams()

  useEffect(() => {
    setLoading(true)
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data: ApiBreedResponseType[]) => {
        const activeBreed = data.find((breed) => {
          if (breed.id === params.breed) return true
        })
        if (activeBreed) {
          setBreed(activeBreed)
        }
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {breed && (
        <>
          <CatInfoStyled breed={breed}></CatInfoStyled>
          <CatGalleryStyled></CatGalleryStyled>
        </>
      )}
    </>
  )
}

export default BreedPage
