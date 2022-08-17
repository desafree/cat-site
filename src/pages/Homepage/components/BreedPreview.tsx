import { FC, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import BreedContext from '../../../context/BreedContext'

interface Props {
  className?: string
}

const BreedPreview: FC<Props> = ({ className }) => {
  const [index, setIndex] = useState([0, 1, 2])
  const { breeds } = useContext(BreedContext)

  const displayedBreeds =
    breeds.length > 0 ? [breeds[index[0]], breeds[index[1]], breeds[index[2]]] : []

  const nextHandleClick = () => {
    const newIndex = index.map((index) => {
      if (index + 1 === breeds.length) return 0
      return index + 1
    })
    setIndex(newIndex)
  }

  const prevHandleClick = () => {
    const newIndex = index.map((index) => {
      if (index - 1 < 0) return breeds.length - 1
      return index - 1
    })
    setIndex(newIndex)
  }

  return (
    <section className={className}>
      <button className='left' onClick={prevHandleClick}>
        <img src='/assets/icons/arrow-back.svg' alt='' />
      </button>
      <button className='right' onClick={nextHandleClick}>
        <img src='/assets/icons/arrow-forward.svg' alt='' />
      </button>
      <div className='breeds'>
        {displayedBreeds.length > 0 &&
          displayedBreeds.map((breed) => {
            return (
              <Link to={`/${breed.id}`} key={breed.id}>
                <div
                  style={{
                    backgroundImage: `url(${breed.image.url})`,
                  }}
                >
                  <span>{breed.name}</span>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}

export default BreedPreview
