import { FC } from 'react'

interface Props {
  className?: string
}

const CatGallery: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h3>Other photos</h3>
      <div className='gallery'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default CatGallery
