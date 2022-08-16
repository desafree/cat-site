import { FC } from 'react'
import CatTextStyled from '../../../components/styled/CatText.styled'
import CatPreviewStyled from '../../../components/styled/CatPreview.styled'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const CatInfo: FC<Props> = ({ className, breed }) => {
  return (
    <section className={className}>
      <CatPreviewStyled breed={breed}></CatPreviewStyled>
      <CatTextStyled breed={breed}></CatTextStyled>
    </section>
  )
}

export default CatInfo
