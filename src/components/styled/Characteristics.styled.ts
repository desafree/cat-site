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
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding: 5px 0;

      .value {
        display: flex;
        gap: 10px;

        span {
          width: 50px;
          height: 15px;
          border-radius: 5px;
          background-color: white;
          border: 1px solid ${({ theme }) => theme.colors.primary};

          &.active1 {
            &:nth-child(1) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
          }
          &.active2 {
            &:nth-child(1) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(2) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
          }
          &.active3 {
            &:nth-child(1) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(2) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(3) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
          }
          &.active4 {
            &:nth-child(1) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(2) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(3) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(4) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
          }
          &.active5 {
            &:nth-child(1) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(2) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(3) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(4) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
            &:nth-child(5) {
              background-color: ${({ theme }) => theme.colors.primary};
            }
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
