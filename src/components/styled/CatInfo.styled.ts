import styled from 'styled-components'
import CatInfo from '../../pages/Breed/components/CatInfo'

const CatInfoStyled = styled(CatInfo)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding: 150px 0 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: 500px) {
    padding: 80px 0 0px;
  }
`

export default CatInfoStyled
