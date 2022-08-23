import { FC, useLayoutEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/fetch'
import { ApiImageResponse } from '../../../typescript/interfaces/ApiImagesResponse'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
interface Props {
  className?: string
}

const CatGallery: FC<Props> = ({ className }) => {
  const params = useParams()
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const el = gsap.utils.selector(galleryRef)
  const { data: gallery, stateFetch } = useFetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${params.breed}&api_key=${process.env.REACT_APP_API_KEY}`,
  )

  console.log(gallery)

  useLayoutEffect(() => {
    const animation = gsap.from(el('.image'), {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: galleryRef.current,
    })

    return () => {
      animation.kill()
    }
  }, [stateFetch])

  return (
    <div className={className}>
      <h3>Other photos</h3>
      {stateFetch === 'loading' && <p>Loading images...</p>}
      {stateFetch === 'success' && (
        <div className='gallery' ref={galleryRef}>
          {gallery.map((img: ApiImageResponse) => {
            return (
              <div
                key={img.id}
                style={{
                  backgroundImage: `url(${img.url})`,
                }}
                data-testid='gallery-item'
                className='image'
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CatGallery
