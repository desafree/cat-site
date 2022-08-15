import styled from 'styled-components'
import Characteristics from '../../pages/Breed/components/Characteristics'

const CharacteristicsStyled = styled(Characteristics)`
  margin-top: 30px;

  .item {
    margin-bottom: 15px;

    h4 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      display: flex;
      gap: 20px;
      align-items: center;

      .value {
        display: flex;
        gap: 10px;

        span {
          width: 50px;
          height: 15px;
          border-radius: 5px;
          background-color: white;
          border: 1px solid ${({ theme }) => theme.colors.primary};

          &.active {
            background-color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .item {
      h4 {
        .value {
          span {
            width: 30px;
            height: 15px;
          }
        }
      }
    }
  }
`

export default CharacteristicsStyled
