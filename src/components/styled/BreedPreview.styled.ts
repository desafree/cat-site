import styled from 'styled-components'
import BreedPreview from '../../pages/Homepage/components/BreedPreview'

const BreedPreviewStyled = styled(BreedPreview)`
  .breeds {
    margin: 80px 0 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    a {
      width: 300px;
      height: 300px;
      background-image: url('/assets/home/cat-home.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      position: relative;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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

      &:nth-child(2) {
        width: 400px;
        height: 400px;
      }
    }
  }

  @media (max-width: 1400px) {
    .breeds {
      a {
        width: 200px;
        height: 200px;

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

        &:nth-child(2) {
          width: 300px;
          height: 300px;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .breeds {
      a {
        display: none;

        &:nth-child(2) {
          display: initial;
          width: 400px;
          height: 400px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .breeds {
      margin: 80px 0;
      a {
        &:nth-child(2) {
          display: initial;
          width: 300px;
          height: 300px;
        }
      }
    }
  }
`

// <BreedPreviewStyled>
//       <div className='breeds'>
//         <Link to='/'>
//           <span>breedName</span>
//         </Link>
//         <Link to='/'>
//           <span>breedName</span>
//         </Link>
//         <Link to='/'>
//           <span>breedName</span>
//         </Link>
//       </div>
//     </BreedPreviewStyled>
export default BreedPreviewStyled
