import HeaderStyled from '../../../components/styled/Header.styled'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <HeaderStyled>
      <div className='text'>
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore.</p>
        <SearchInput></SearchInput>
      </div>
      <div className='img-container'></div>
    </HeaderStyled>
  )
}

export default Header
