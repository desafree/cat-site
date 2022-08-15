import styled from 'styled-components'
import LinkText from '../shared/Link'

const LinkStyled = styled(LinkText)`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`

export default LinkStyled
