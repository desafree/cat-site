import { FC } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatProfile: FC<Props> = ({ className, breed }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${breed.image.url})`,
      }}
    >
      <button>
        {' '}
        <img src='/assets/icons/back.svg' alt='' />{' '}
      </button>
      <div className='preview'>
        <div
          className='img-container'
          style={{
            backgroundImage: `url(${breed.image.url})`,
          }}
        />
        <div className='text'>
          <p>
            <strong>{breed.name}</strong>
            <br /> Lorem, ipsum dolor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CatProfile
