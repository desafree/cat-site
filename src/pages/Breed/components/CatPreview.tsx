import CatProfileStyled from '../../../components/styled/CatProfile.styled'
import CatCategoryStyled from '../../../components/styled/CatCategory.styled'
import { FC } from 'react'

interface Props {
  className?: string
}

const CatPreview: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CatProfileStyled></CatProfileStyled>
      <CatCategoryStyled></CatCategoryStyled>
    </div>
  )
}

export default CatPreview
