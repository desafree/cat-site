import styled from 'styled-components'
import SearchInput from '../../pages/Homepage/components/SearchInput'

const SearchInputStyled = styled(SearchInput)`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;

  .results {
    position: absolute;
    top: 50px;

    background: #ffffff;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    border: 1px solid #bdbdbd;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    max-height: 220px;
    overflow-y: auto;
    div {
      padding: 20px 48px 20px 28px;
      border-bottom: 1px solid #bdbdbd;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

      &:hover {
        background: rgba(151, 151, 151, 0.1);
      }
    }
  }

  input {
    min-width: 400px;
    padding: 20px 48px 20px 28px;
    background: #ffffff;
    border-radius: 59px;
    border: 1px solid #7a746e;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  .go {
    display: inline-block;
    padding: 10px;
    box-sizing: content-box;
    border: 1px solid white;
    color: white;
    position: absolute;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary};
    top: -7px;
    border-radius: 50%;
    right: 25px;
    width: 20px;
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    input {
      min-width: 300px;
    }

    img {
      top: 18px;
    }

    .go {
      top: 12px;
    }
  }

  @media (max-width: 700px) {
    input {
      min-width: 250px;
    }
  }
`

export default SearchInputStyled
