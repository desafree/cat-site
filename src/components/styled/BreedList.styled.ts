import styled from 'styled-components'
import BreedList from '../../pages/Breeds/components/BreedList'

const BreedListStyled = styled(BreedList)`
  padding: 150px 0;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;

  h3 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 75px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    padding: 50px 0;
  }
`

export default BreedListStyled
