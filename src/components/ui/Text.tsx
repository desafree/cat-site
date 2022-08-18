import LinkStyled from '../styled/Link.styled'
import { FC, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface Props {
  title: string
  description: string
  linkTitle?: string
  linkPath?: string
  className?: string
}

const Text: FC<Props> = ({ title, description, linkTitle, linkPath, className }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const q = gsap.utils.selector(container)

  useLayoutEffect(() => {
    const tl = gsap
      .timeline({ scrollTrigger: { trigger: container.current, start: 'top 70%' } })
      .from(q('h3'), { opacity: 0, x: -50 })
      .from(q('p'), { opacity: 0, x: -50 }, '<')
      .from(q('a'), { opacity: 0, y: 50 })

    return () => {
      tl.kill()
    }
  }, [])
  return (
    <div className={className} ref={container}>
      <h3>{title}</h3>
      <p>{description}</p>
      {linkTitle && linkPath && <LinkStyled url={linkPath}>{linkTitle}</LinkStyled>}
    </div>
  )
}

export default Text
