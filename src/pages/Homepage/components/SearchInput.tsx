import SearchInputStyled from '../../../components/styled/SearchInput'

const SearchInput = () => {
  return (
    <SearchInputStyled>
      <input type='text' placeholder='Enter your breed' />
      <img src='/assets/icons/search.svg' alt='' />
    </SearchInputStyled>
  )
}

export default SearchInput
