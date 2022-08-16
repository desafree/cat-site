import HeaderStyled from '../../components/styled/Header.styled'
import BreedPreviewStyled from '../../components/styled/BreedPreview.styled'
import Info from './components/Info'
import { useEffect, useState } from 'react'
import ApiBreedResponseType from '../../typescript/interfaces/ApiBreedResponse'

const Homepage = () => {
  const [breeds, setBreeds] = useState<ApiBreedResponseType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data)
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
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <HeaderStyled breeds={breeds}></HeaderStyled>
          <BreedPreviewStyled breeds={breeds}></BreedPreviewStyled>
          <Info></Info>
        </>
      )}
    </>
  )
}

export default Homepage
