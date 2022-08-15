/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import CharacteristicsStyled from '../../../components/styled/Characteristics.styled'

interface Props {
  className?: string
}

const CatText: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h3>Bengal</h3>
      <p className='description'>
        Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or
        for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of
        interaction and woe betide the owner who doesn't provide it.
      </p>
      <p className='info'>
        <strong>Origin:</strong> United State
      </p>
      <p className='info'>
        <strong>Life Span:</strong> 12 - 15 years
      </p>
      <CharacteristicsStyled></CharacteristicsStyled>
    </div>
  )
}

export default CatText
