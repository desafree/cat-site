import styled from 'styled-components'
import CatProfile from '../../pages/Breed/components/CatProfile'

const CatProfileStyled = styled(CatProfile)`
  width: 500px;
  height: 500px;
  background-image: url(/assets/home/cat-home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 40px;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;

    img {
      width: 25px;
      margin-right: -8px;
    }
  }

  .preview {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 10px;

    .text {
      p {
        line-height: 25px;
      }
    }

    .img-container {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-image: url(/assets/home/cat-home.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`

// <div>
//       <button>
//         {' '}
//         <img src='/assets/icons/search.svg' alt='' />{' '}
//       </button>
//       <div className='preview'>
//         <img src='/assets/home/cat-home.jpg' alt='' />
//         <div className='text'>
//           <h5>Cat breed</h5>
//           <p>Lorem, ipsum dolor.</p>
//         </div>
//       </div>
//     </div>
export default CatProfileStyled
