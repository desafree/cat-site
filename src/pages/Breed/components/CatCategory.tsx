import { FC, useLayoutEffect, useRef } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'
import gsap from 'gsap'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatCategory: FC<Props> = ({ className, breed }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const q = gsap.utils.selector(container)
  const characteristics = breed.temperament.split(',')

  useLayoutEffect(() => {
    const animation = gsap.from(q('.category'), { opacity: 0, stagger: 0.1, y: 5 })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <div className={className} ref={container}>
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
