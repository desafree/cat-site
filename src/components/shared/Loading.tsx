import { FC } from 'react'

interface Props {
  className?: string
}

const Loading: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img src='/assets/icons/cat-gif.gif' alt='' />
    </div>
  )
}

export default Loading
