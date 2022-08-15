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
    background-image: url('/assets/home/cat-home.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .div1 {
    grid-area: 1 / 1 / 4 / 4;
  }
  .div2 {
    grid-area: 4 / 2 / 8 / 4;
  }
  .div3 {
    grid-area: 1 / 4 / 6 / 6;
  }
`

export default GridImgStyled
