import { Link } from 'react-router-dom'
import NavigationStyled from '../styled/Navigation.styled'

const Navigation = () => {
  return (
    <NavigationStyled>
      <Link to='/'>Logo</Link>

      <ul>
        <li>
          <Link to='/'>link1</Link>
        </li>
        <li>
          <Link to='/'>link2</Link>
        </li>
        <li>
          <Link to='/'>link3</Link>
        </li>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation
