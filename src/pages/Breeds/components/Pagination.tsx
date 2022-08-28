import React, { FC } from 'react'

interface Props {
  postsPerPage: number
  totalPosts: number
  currentPage: number
  paginate: (pageNumber: number) => void
  className?: string
}

const Pagination: FC<Props> = ({ postsPerPage, totalPosts, paginate, className, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className={className}>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button
              onClick={() => paginate(number)}
              className={`${number === currentPage ? 'active' : ''}`}
              data-testid='pagination-item'
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
