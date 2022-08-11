import InfoStyled from '../../../components/styled/Info.styled'
import TextStyled from '../../../components/styled/Text.styled'
import { Link } from 'react-router-dom'
import LinkStyled from '../../../components/styled/Link'
import GridImg from './GridImages'

const Info = () => {
  return (
    <InfoStyled>
      <TextStyled>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a velit quis ullam. Et, iste
          quia. Id aperiam iure tempore natus dicta aliquid corporis ipsa.
        </p>
        <LinkStyled>
          <Link to='/'>Lorem ipsum</Link>
        </LinkStyled>
      </TextStyled>
      <GridImg></GridImg>
    </InfoStyled>
  )
}

export default Info
