import styled from 'styled-components'
import CatProfile from '../../pages/Breed/components/CatProfile'

const CatProfileStyled = styled(CatProfile)`
  width: 500px;
  height: 500px;
  background-image: url(/assets/home/cat-home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .preview {
    img {
      width: 20px;
    }
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
