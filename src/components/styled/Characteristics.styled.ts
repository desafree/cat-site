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
          border: 1px solid rgba(0, 0, 0, 0.2);

          &.active1 {
            &:nth-child(1) {
              background-color: #f5f0bb;
            }
          }
          &.active2 {
            &:nth-child(1) {
              background-color: #f5f0bb;
            }
            &:nth-child(2) {
              background-color: #f6e3c5;
            }
          }
          &.active3 {
            &:nth-child(1) {
              background-color: #f5f0bb;
            }
            &:nth-child(2) {
              background-color: #f6e3c5;
            }
            &:nth-child(3) {
              background-color: #a0d995;
            }
          }
          &.active4 {
            &:nth-child(1) {
              background-color: #f5f0bb;
            }
            &:nth-child(2) {
              background-color: #f6e3c5;
            }
            &:nth-child(3) {
              background-color: #a0d995;
            }
            &:nth-child(4) {
              background-color: #6cc4a1;
            }
          }
          &.active5 {
            &:nth-child(1) {
              background-color: #f5f0bb;
            }
            &:nth-child(2) {
              background-color: #f6e3c5;
            }
            &:nth-child(3) {
              background-color: #a0d995;
            }
            &:nth-child(4) {
              background-color: #6cc4a1;
            }
            &:nth-child(5) {
              background-color: #4cacbc;
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
