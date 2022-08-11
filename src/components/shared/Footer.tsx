import { Link } from 'react-router-dom'
import FooterStyled from '../styled/Footer.styled'

const Footer = () => {
  return (
    <FooterStyled>
      <Link to='/'>Logo</Link>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </FooterStyled>
  )
}

export default Footer
