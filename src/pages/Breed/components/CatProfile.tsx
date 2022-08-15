import { FC } from 'react'

interface Props {
  className?: string
}

const CatProfile: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <button>
        {' '}
        <img src='/assets/icons/back.svg' alt='' />{' '}
      </button>
      <div className='preview'>
        <div className='img-container' />
        <div className='text'>
          <p>
            <strong>Cat Breed</strong>
            <br /> Lorem, ipsum dolor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CatProfile
