import { Link } from 'react-router-dom'
import NavigationStyled from '../styled/Navigation.styled'

const Navigation = () => {
  return (
    <NavigationStyled>
      <Link to='/'>Logo</Link>

      <ul>
        <li>
          <a href='https://github.com/desafree' target='_blank' rel='noreferrer'>
            github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/'
            target='_blank'
            rel='noreferrer'
          >
            linkedin
          </a>
        </li>
        <li>
          <a href='mailto:nicoladesanctis99@gmail.com'>mail</a>
        </li>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation
