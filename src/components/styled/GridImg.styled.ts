import styled from 'styled-components'
import GridImg from '../../pages/Homepage/components/GridImages'

const GridImgStyled = styled(GridImg)`
  display: grid;
  gap: 200px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-self: stretch;
  flex-basis: 50%;

  div {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .div1 {
    grid-area: 1 / 1 / 4 / 4;
    background-image: url('/assets/home/cat-or.jpg');
  }
  .div2 {
    grid-area: 4 / 2 / 8 / 4;
    background-image: url('/assets/home/cat-vert-2.jpg');
  }
  .div3 {
    grid-area: 1 / 4 / 6 / 6;
    background-image: url('/assets/home/cat-vert.jpg');
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(7, 80px);
  }
`

export default GridImgStyled
