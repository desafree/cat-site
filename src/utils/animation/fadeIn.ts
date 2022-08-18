import gsap from 'gsap'

function fadeIn(target: HTMLElement | null, vars?: { [key: string]: any }) {
  return gsap.fromTo(target, { opacity: 0 }, { opacity: 1 })
}

export default fadeIn
