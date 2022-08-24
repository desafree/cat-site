import { FC, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface Props {
  className?: string
}

const GridImg: FC<Props> = ({ className }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const el = gsap.utils.selector(container)

  useLayoutEffect(() => {
    const tl = gsap
      .timeline({ scrollTrigger: { trigger: container.current, start: 'top 70%' } })
      .to(el('.hide'), { width: '0%' })
      .from(el('div div'), { scale: 1.3 }, '<')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className={className} ref={container}>
      <div className='div1'>
        <div className='hide'></div>
        <img src='/assets/home/cat-or.jpg' alt='' />
      </div>
      <div className='div2'>
        <div className='hide'></div>
        <img src='/assets/home/cat-vert-2.jpg' alt='' />
      </div>
      <div className='div3'>
        <div className='hide'></div>
        <img src='/assets/home/cat-vert.jpg' alt='' />
      </div>
    </div>
  )
}

export default GridImg
