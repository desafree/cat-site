import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect, useState } from 'react'
import NavigationStyled from '../styled/Navigation.styled'
import gsap from 'gsap'
import { createPortal } from 'react-dom'

const Navigation = () => {
  const [hideNav, setHideNav] = useState(false)

  const list = useRef<HTMLUListElement | null>(null)
  const mobileNav = useRef<HTMLDivElement | null>(null)
  const el = gsap.utils.selector(mobileNav)
  const q = gsap.utils.selector(list)

  useLayoutEffect(() => {
    const animation = gsap.from(q('li'), { opacity: 0, y: -20, stagger: 0.1, delay: 0.5 })

    return () => {
      animation.kill()
    }
  }, [])

  useLayoutEffect(() => {
    const tl = gsap.timeline()
    if (hideNav === true) {
      tl.fromTo(mobileNav.current, { x: '100vw' }, { x: '0vw' }).from(el('ul li'), {
        opacity: 0,
        stagger: 0.1,
      })
    }

    return () => {
      tl.kill()
    }
  }, [hideNav])

  const handleHideNav = () => {
    setHideNav((prevState) => !prevState)
  }

  return (
    <NavigationStyled>
      <div className='desktop'>
        <Link to='/'>
          <img src='/assets/icons/logo.svg' alt='' />
        </Link>

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
      </div>

      <div className='mobile'>
        <button className='navTrigger' onClick={handleHideNav}>
          <img src='/assets/icons/menu.svg' alt='' />
        </button>

        {hideNav && (
          <div className='menu-container' ref={mobileNav}>
            <ul>
              <li>
                <Link to='/'>
                  <img src='/assets/icons/logo.svg' alt='' />
                </Link>
              </li>
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
          </div>
        )}
      </div>
    </NavigationStyled>
  )
}

export default Navigation
