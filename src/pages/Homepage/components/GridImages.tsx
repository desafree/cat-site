import { FC } from 'react'

interface Props {
  className?: string
}

const GridImg: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className='div1'></div>
      <div className='div2'></div>
      <div className='div3'></div>
    </div>
  )
}

export default GridImg
