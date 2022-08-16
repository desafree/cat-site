import { FC, useEffect, useState } from 'react'
import ApiGalleryResponse from '../../../typescript/interfaces/ApiImagesResponse'
import { useParams } from 'react-router-dom'

interface Props {
  className?: string
}

const CatGallery: FC<Props> = ({ className }) => {
  const [gallery, setGallery] = useState<ApiGalleryResponse>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${params.breed}&api_key=${process.env.REACT_APP_API_KEY}`,
      {
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY as string,
        },
      },
    )
      .then((res) => res.json())
      .then((data: ApiGalleryResponse) => {
        setGallery(data)
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className={className}>
      <h3>Other photos</h3>
      <div className='gallery'>
        {gallery.map((img) => {
          return (
            <div
              key={img.id}
              style={{
                backgroundImage: `url(${img.url})`,
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default CatGallery
