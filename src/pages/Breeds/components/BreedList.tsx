import { FC, useContext, useRef, useLayoutEffect } from 'react'
import BreedTrailerStyled from '../../../components/styled/BreedTrailer.styled'
import BreedContext from '../../../context/BreedContext'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface Props {
  className?: string
}

const BreedList: FC<Props> = ({ className }) => {
  const { breeds } = useContext(BreedContext)

  const container = useRef<HTMLDivElement | null>(null)
  const el = gsap.utils.selector(container)

  useLayoutEffect(() => {
    const animation = gsap
      .timeline()
      .from(el('.cont'), {
        scale: 0.8,
        opacity: 0,
        x: -100,
        stagger: 0.1,
      })
      .from(el('.text'), { opacity: 0, y: 50, stagger: 0.1 }, '<.2')

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <div className={className}>
      <h3>All Breeds</h3>
      <div ref={container}>
        {breeds.map((breed, index) => {
          return (
            <Link key={breed.id} to={`/${breed.id}`}>
              <BreedTrailerStyled
                name={breed.name}
                description={breed.description}
                index={index + 1}
                img={breed.image?.url}
              ></BreedTrailerStyled>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BreedList
