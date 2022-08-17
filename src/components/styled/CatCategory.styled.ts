import styled from 'styled-components'
import CatCategory from '../../pages/Breed/components/CatCategory'

const CatCategoryStyled = styled(CatCategory)`
  margin-top: 20px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .category {
    width: 150px;
    height: 50px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: white;
    font-weight: 600;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    max-width: 500px;

    .category {
      width: 100px;
      height: 50px;
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`

export default CatCategoryStyled
