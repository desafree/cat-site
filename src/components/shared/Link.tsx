import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  url: string
  className?: string
  children: React.ReactNode
}

const LinkText: FC<Props> = ({ url, className, children }) => {
  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  )
}

export default LinkText
