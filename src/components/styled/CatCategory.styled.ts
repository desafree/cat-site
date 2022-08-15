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
    border: 2px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    max-width: 500px;

    .category {
      width: 90px;
      height: 50px;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`

export default CatCategoryStyled
