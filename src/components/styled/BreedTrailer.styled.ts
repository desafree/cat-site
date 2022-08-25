import styled from 'styled-components'
import BreedTrailer from '../../pages/Breeds/components/BreedTrailer'

const BreedTrailerStyled = styled(BreedTrailer)`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 50px;
  color: #000;

  .img-container {
    flex-basis: 170px;
    height: 170px;
    border-radius: 24px;
    background-image: url(/assets/home/cat-vert.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .text {
    flex: 1;
    h4 {
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      text-decoration: none;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    margin-bottom: 100px;
    .img-container {
      width: 300px;
      height: 300px;
    }
  }
`

export default BreedTrailerStyled
