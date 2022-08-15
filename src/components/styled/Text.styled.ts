import styled from 'styled-components'
import Text from '../shared/Text'

const TextStyled = styled(Text)`
  padding: 120px 0;
  max-width: 450px;

  h3 {
    font-size: 48px;
    font-weight: 700;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
  }

  p {
    max-width: 450px;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 80px;
  }
`

export default TextStyled
