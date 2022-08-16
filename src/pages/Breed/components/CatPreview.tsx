import CatProfileStyled from '../../../components/styled/CatProfile.styled'
import CatCategoryStyled from '../../../components/styled/CatCategory.styled'
import { FC } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatPreview: FC<Props> = ({ className, breed }) => {
  return (
    <div className={className}>
      <CatProfileStyled breed={breed}></CatProfileStyled>
      <CatCategoryStyled breed={breed}></CatCategoryStyled>
    </div>
  )
}

export default CatPreview
