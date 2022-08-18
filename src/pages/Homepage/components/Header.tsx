import { FC, useLayoutEffect, useRef } from 'react'
import SearchInputStyled from '../../../components/styled/SearchInput.styled'

import gsap from 'gsap'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const q = gsap.utils.selector(container)

  useLayoutEffect(() => {
    const tl = gsap
      .timeline()
      .from(q('.img-container'), { opacity: 0, y: 200 })
      .from(q('.text'), { opacity: 0, x: -200 }, '<')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className={className} ref={container}>
      <div className='text'>
        <h1>Cat Wikipedia</h1>
        <p>Get to know more about your cat breed! 66+ Breeds For you to discover</p>
        <SearchInputStyled></SearchInputStyled>
      </div>
      <div className='img-container'></div>
    </div>
  )
}

export default Header
