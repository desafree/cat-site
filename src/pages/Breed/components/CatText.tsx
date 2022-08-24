/* eslint-disable react/no-unescaped-entities */
import { FC, useLayoutEffect, useRef } from 'react'
import CharacteristicsStyled from '../../../components/styled/Characteristics.styled'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'
import gsap from 'gsap'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatText: FC<Props> = ({ className, breed }) => {
  const container = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const animation = gsap.from(container.current, { opacity: 0, delay: 0.3 })
    return () => {
      animation.kill()
    }
  }, [])

  return (
    <div className={className} ref={container} data-testid='cat-text'>
      <h3>{breed.name ? breed.name : 'Not available'}</h3>
      <p className='description'>{breed.description ? breed.description : 'Not available'}</p>
      <p className='info'>
        <strong>Origin:</strong> {breed.origin ? breed.origin : 'Not available'}
      </p>
      <p className='info'>
        <strong>Life Span:</strong> {breed.life_span ? breed.life_span + ' years' : 'Not available'}
      </p>
      <CharacteristicsStyled breed={breed}></CharacteristicsStyled>
    </div>
  )
}

export default CatText
