import { FC } from 'react'

interface Props {
  className?: string
}

const CatCategory: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className='category'>Alert</div>
      <div className='category'>Alert</div>
      <div className='category'>Alert</div>
      <div className='category'>Alert</div>
      <div className='category'>Alert</div>
    </div>
  )
}

export default CatCategory
