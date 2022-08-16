/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import CharacteristicsStyled from '../../../components/styled/Characteristics.styled'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatText: FC<Props> = ({ className, breed }) => {
  return (
    <div className={className}>
      <h3>{breed.name}</h3>
      <p className='description'>{breed.description}</p>
      <p className='info'>
        <strong>Origin:</strong> {breed.origin}
      </p>
      <p className='info'>
        <strong>Life Span:</strong> {breed.life_span} years
      </p>
      <CharacteristicsStyled breed={breed}></CharacteristicsStyled>
    </div>
  )
}

export default CatText
