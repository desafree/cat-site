import LinkStyled from '../styled/Link.styled'
import { FC } from 'react'

interface Props {
  title: string
  description: string
  linkTitle?: string
  linkPath?: string
  className?: string
}

const Text: FC<Props> = ({ title, description, linkTitle, linkPath, className }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      {linkTitle && linkPath && <LinkStyled url={linkPath}>{linkTitle}</LinkStyled>}
    </div>
  )
}

export default Text
