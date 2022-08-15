import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

const BreedPreview: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div className='breeds'>
        <Link to='/'>
          <span>breedName</span>
        </Link>
        <Link to='/'>
          <span>breedName</span>
        </Link>
        <Link to='/'>
          <span>breedName</span>
        </Link>
      </div>
    </section>
  )
}

export default BreedPreview
