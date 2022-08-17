import styled from 'styled-components'
import Loading from '../shared/Loading'

const LoadingStyled = styled(Loading)`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
`

export default LoadingStyled
