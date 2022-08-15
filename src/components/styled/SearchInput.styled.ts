import styled from 'styled-components'
import SearchInput from '../../pages/Homepage/components/SearchInput'

const SearchInputStyled = styled(SearchInput)`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;

  input {
    min-width: 400px;
    padding: 20px 48px 20px 28px;
    background: #ffffff;
    border-radius: 59px;
    border: 1px solid #7a746e;
  }

  img {
    position: absolute;
    top: 4px;
    right: 25px;
    width: 20px;
  }

  @media (max-width: 1400px) {
    input {
      min-width: 300px;
    }

    img {
      top: 18px;
    }
  }

  @media (max-width: 700px) {
    input {
      min-width: 250px;
    }
  }
`

export default SearchInputStyled
