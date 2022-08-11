import styled from 'styled-components'
import theme from '../../theme'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px 0;
  .text {
    flex: 1;
    padding: 220px 0 320px 108px;

    h1 {
      font-size: 56px;
      font-weight: 800;
      line-height: 71px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 30px;
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      max-width: 450px;
      margin-bottom: 50px;
    }
  }

  .img-container {
    flex: 1;
    background-image: url('/assets/home/cat-home.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 400px;
  }
`

// <HeaderStyled>
//       <div className='text'>
//         <h1>Lorem, ipsum dolor.</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore.</p>
//         <button>Lorem, ipsum.</button>
//       </div>
//       <div className='img-container'></div>
//     </HeaderStyled>

export default HeaderStyled
