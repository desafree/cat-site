import styled from 'styled-components'
import CatGallery from '../../pages/Breed/components/CatGallery'

const CatGalleryStyled = styled(CatGallery)`
  margin: 150px 0;
  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 40px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
    grid-template-rows: 240px;
    grid-auto-rows: 240px;
    grid-gap: 20px;

    div {
      background-image: url(/assets/home/cat-home.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 24px;
    }
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`

export default CatGalleryStyled
