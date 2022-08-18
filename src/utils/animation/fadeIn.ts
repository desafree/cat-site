import gsap from 'gsap'

function fadeIn(target: HTMLElement | null, vars?: { [key: string]: any }) {
  return gsap.from(target, { opacity: 0, ...vars })
}

export default fadeIn
