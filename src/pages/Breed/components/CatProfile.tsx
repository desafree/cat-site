import { FC } from 'react'

interface Props {
  className?: string
}

const CatProfile: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <button>
        {' '}
        <img src='/assets/icons/search.svg' alt='' />{' '}
      </button>
      <div className='preview'>
        <img src='/assets/home/cat-home.jpg' alt='' />
        <div className='text'>
          <h5>Cat breed</h5>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  )
}

export default CatProfile
