import { FC } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatCategory: FC<Props> = ({ className, breed }) => {
  const characteristics = breed.temperament.split(',')

  return (
    <div className={className}>
      {characteristics.map((value) => {
        return (
          <div className='category' key={value}>
            {value}
          </div>
        )
      })}
    </div>
  )
}

export default CatCategory
