import styled from 'styled-components'
import BreedPreview from '../../pages/Homepage/components/BreedPreview'

const BreedPreviewStyled = styled(BreedPreview)`
  position: relative;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 20;

    &.left {
      position: absolute;
      top: 50%;
      left: 5%;
    }

    &.right {
      position: absolute;
      top: 50%;
      right: 5%;
    }
  }

  .breeds {
    margin: 80px 0 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    overflow: hidden;

    a {
      div {
        width: 300px;
        height: 300px;
        background-image: url('/assets/home/cat-home.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      span {
        position: absolute;
        bottom: 30px;
        right: 0;
        padding: 16px 40px;
        background-color: white;
        border-radius: 29px;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: ${({ theme }) => theme.colors.secondary};
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      &:nth-child(2) div {
        width: 400px;
        height: 400px;
      }
    }
  }

  @media (max-width: 1400px) {
    .breeds {
      a {
        div {
          width: 200px;
          height: 200px;
        }

        span {
          position: absolute;
          bottom: 10px;
          right: -20px;
          padding: 10px 25px;
          background-color: white;
          border-radius: 29px;
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: 0px;
          text-align: left;
          color: ${({ theme }) => theme.colors.secondary};
          border: 2px solid ${({ theme }) => theme.colors.secondary};
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        &:nth-child(2) div {
          width: 300px;
          height: 300px;
        }
      }
    }

    button {
      &.left {
        left: -5%;
      }

      &.right {
        right: -5%;
      }
    }
  }

  @media (max-width: 1000px) {
    .breeds {
      a {
        div {
          visibility: hidden;
        }

        &:nth-child(2) div {
          visibility: visible;
          width: 400px;
          height: 400px;
        }
      }
    }

    button {
      &.left {
        left: 10%;
      }

      &.right {
        right: 10%;
      }
    }
  }

  @media (max-width: 768px) {
    .breeds {
      margin: 80px 0;
      a {
        div {
          visibility: hidden;
        }
        &:nth-child(2) div {
          visibility: visible;
          width: 250px;
          height: 250px;
        }
      }
    }

    button {
      &.left {
        left: 5%;
      }

      &.right {
        right: 5%;
      }
    }
  }
`

export default BreedPreviewStyled
