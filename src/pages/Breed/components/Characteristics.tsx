import { FC } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'
import CharacteristicItem from './CharacteristicItem'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const Characteristics: FC<Props> = ({ className, breed }) => {
  return (
    <div className={className}>
      <CharacteristicItem title='Adaptability' intensity={breed.adaptability}></CharacteristicItem>
      <CharacteristicItem
        title='Affection level'
        intensity={breed.affection_level}
      ></CharacteristicItem>
      <CharacteristicItem
        title='Child Friendly'
        intensity={breed.child_friendly}
      ></CharacteristicItem>
      <CharacteristicItem title='Grooming' intensity={breed.grooming}></CharacteristicItem>
      <CharacteristicItem title='Intelligence' intensity={breed.intelligence}></CharacteristicItem>
      <CharacteristicItem
        title='Health issues'
        intensity={breed.health_issues}
      ></CharacteristicItem>
      <CharacteristicItem title='Social needs' intensity={breed.social_needs}></CharacteristicItem>
      <CharacteristicItem
        title='Stranger friendly'
        intensity={breed.adaptability}
      ></CharacteristicItem>
    </div>
  )
}

export default Characteristics
