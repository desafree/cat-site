import { FC, useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'
import gsap from 'gsap'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatProfile: FC<Props> = ({ className, breed }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const img = useRef<HTMLImageElement | null>(null)
  const navigation = useNavigate()

  useLayoutEffect(() => {
    const tl = gsap
      .timeline()
      .from(img.current, { scale: 2 })
      .to(container.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, 0)
      .to(img.current, { scale: 1, duration: 0.5 })

    return () => {
      tl.kill()
    }
  }, [])

  const handleClickBack = () => {
    navigation('/')
  }

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${breed.image ? breed.image.url : '/assets/home/no-img.jpg'})`,
      }}
      ref={container}
    >
      <img
        src={breed.image ? breed.image.url : '/assets/home/no-img.jpg'}
        alt=''
        className='imgCat'
        ref={img}
      />
      <button onClick={handleClickBack}>
        {' '}
        <img src='/assets/icons/back.svg' alt='' />{' '}
      </button>
      <div className='preview'>
        <div
          className='img-container'
          style={{
            backgroundImage: `url(${breed.image ? breed.image.url : '/assets/home/no-img.jpg'})`,
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
