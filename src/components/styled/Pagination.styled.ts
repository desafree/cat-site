import styled from 'styled-components'
import Pagination from '../../pages/Breeds/components/Pagination'

const PaginationStyled = styled(Pagination)`
  ul {
    display: flex;
    gap: 12px;
    list-style: none;
    li button {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      border: 1px solid #b7bcce;
      background-color: transparent;
      border-radius: 12px;
      cursor: pointer;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 500px) {
    ul {
      gap: 8px;
    }
  }
`

export default PaginationStyled
