import { FC } from 'react'
import CatTextStyled from '../../../components/styled/CatText.styled'
import CatPreviewStyled from '../../../components/styled/CatPreview.styled'

interface Props {
  className?: string
}

const CatInfo: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <CatPreviewStyled></CatPreviewStyled>
      <CatTextStyled></CatTextStyled>
    </section>
  )
}

export default CatInfo
