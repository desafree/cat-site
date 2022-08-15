import styled from 'styled-components'

const FooterStyled = styled.footer`
  background-color: #000;
  padding: 40px 108px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    align-items: center;
    padding: 20px;
  }
`

export default FooterStyled
