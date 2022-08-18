import styled from 'styled-components'

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50px;
  left: 273px;
  right: 273px;
  z-index: 200;
  a {
    color: #000;
  }

  ul {
    display: flex;
    gap: 30px;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export default NavigationStyled
