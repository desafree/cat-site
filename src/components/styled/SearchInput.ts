import styled from 'styled-components'

const SearchInputStyled = styled.label`
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
`

export default SearchInputStyled

// <label htmlFor='breed'>
// <input type='text' />
// <img src='/assets/icons/search.svg' alt='' />
// </label>
