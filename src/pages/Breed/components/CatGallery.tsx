import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/fetch'
import { ApiImageResponse } from '../../../typescript/interfaces/ApiImagesResponse'

interface Props {
  className?: string
}

const CatGallery: FC<Props> = ({ className }) => {
  const params = useParams()
  const { data: gallery, stateFetch } = useFetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${params.breed}&api_key=${process.env.REACT_APP_API_KEY}`,
  )

  return (
    <div className={className}>
      <h3>Other photos</h3>
      {stateFetch === 'loading' && <p>Loading images...</p>}
      {stateFetch === 'success' && (
        <div className='gallery'>
          {gallery.map((img: ApiImageResponse) => {
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
      )}
    </div>
  )
}

export default CatGallery
