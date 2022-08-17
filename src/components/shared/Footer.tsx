import { Link } from 'react-router-dom'
import FooterStyled from '../styled/Footer.styled'

const Footer = () => {
  return (
    <FooterStyled>
      <Link to='/'>PERSONAL PROJECT</Link>
      <p>
        This is a personal project of Nicola De Sanctis check the link in the Navigation bar to
        discover more
      </p>
    </FooterStyled>
  )
}

export default Footer
