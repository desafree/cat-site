import styled from 'styled-components'
import CatText from '../../pages/Breed/components/CatText'

const CatTextStyled = styled(CatText)`
  max-width: 650px;

  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 25px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 25px;
  }

  .info {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`

export default CatTextStyled
