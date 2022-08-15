import styled from 'styled-components'

const InfoStyled = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 150px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

export default InfoStyled
