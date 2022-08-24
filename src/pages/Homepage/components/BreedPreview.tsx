import { FC, useState, useContext, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import BreedContext from '../../../context/BreedContext'
import fadeIn from '../../../utils/animation/fadeIn'

interface Props {
  className?: string
}

const BreedPreview: FC<Props> = ({ className }) => {
  const container = useRef<HTMLElement | null>(null)
  const [index, setIndex] = useState([0, 1, 2])
  const { breeds } = useContext(BreedContext)

  useLayoutEffect(() => {
    const animation = fadeIn(container.current)
    return () => {
      animation.kill()
    }
  }, [index])

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
    <section className={className} ref={container}>
      <button className='left' onClick={prevHandleClick} data-testid='prev'>
        <img src='/assets/icons/arrow-back.svg' alt='' />
      </button>
      <button className='right' onClick={nextHandleClick} data-testid='next'>
        <img src='/assets/icons/arrow-forward.svg' alt='' />
      </button>
      <div className='breeds'>
        {displayedBreeds.length > 0 &&
          displayedBreeds.map((breed) => {
            return (
              <Link to={`/${breed.id}`} key={breed.id} data-testid='item'>
                <div
                  style={{
                    backgroundImage: `url(${
                      breed.image ? breed.image.url : '/assets/home/no-img.jpg'
                    })`,
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
