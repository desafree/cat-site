import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect } from 'react'
import NavigationStyled from '../styled/Navigation.styled'
import gsap from 'gsap'

const Navigation = () => {
  const list = useRef<HTMLUListElement | null>(null)
  const q = gsap.utils.selector(list)

  useLayoutEffect(() => {
    const animation = gsap.from(q('li'), { opacity: 0, y: -20, stagger: 0.1, delay: 0.5 })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <NavigationStyled>
      <Link to='/'>Logo</Link>

      <ul ref={list}>
        <li>
          <a href='https://github.com/desafree' target='_blank' rel='noreferrer'>
            github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/'
            target='_blank'
            rel='noreferrer'
          >
            linkedin
          </a>
        </li>
        <li>
          <a href='mailto:nicoladesanctis99@gmail.com'>mail</a>
        </li>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation
