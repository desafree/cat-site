import { FC } from 'react'
import SearchInputStyled from '../../../components/styled/SearchInput.styled'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className='text'>
        <h1>Cat Wikipedia</h1>
        <p>Get to know more about your cat breed! 66+ Breeds For you to discover</p>
        <SearchInputStyled></SearchInputStyled>
      </div>
      <div className='img-container'></div>
    </div>
  )
}

export default Header
