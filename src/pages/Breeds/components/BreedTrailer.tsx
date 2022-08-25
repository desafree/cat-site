/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'

interface Props {
  className?: string
  name: string
  description: string
  index: number
  img?: string
}

const BreedTrailer: FC<Props> = ({ className, name, description, index, img }) => {
  return (
    <div className={className + ' cont'}>
      <div
        className='img-container'
        style={{
          backgroundImage: img ? `url(${img})` : '/assets/home/no-img.jpg',
        }}
      ></div>
      <div className='text'>
        <h4>
          {index}. {name}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BreedTrailer
