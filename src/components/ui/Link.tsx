import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  url: string
  className?: string
  children: React.ReactNode
  type?: string
}

const LinkText: FC<Props> = ({ url, className, children, type }) => {
  if (type === 'internal') {
    return (
      <Link to={url} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={url} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}

export default LinkText
