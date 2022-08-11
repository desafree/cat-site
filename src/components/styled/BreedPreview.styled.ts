import styled from 'styled-components'

const BreedPreviewStyled = styled.section`
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
