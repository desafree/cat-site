import styled from 'styled-components'
import CatPreview from '../../pages/Breed/components/CatPreview'

const CatPreviewStyled = styled(CatPreview)`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default CatPreviewStyled
