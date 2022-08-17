import { FC } from 'react'
import SearchInputStyled from '../../../components/styled/SearchInput.styled'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  console.log(className)

  return (
    <div className={className}>
      <div className='text'>
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore.</p>
        <SearchInputStyled></SearchInputStyled>
      </div>
      <div className='img-container'></div>
    </div>
  )
}

export default Header
