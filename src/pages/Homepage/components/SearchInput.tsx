import { FC } from 'react'

interface Props {
  className?: string
}

const SearchInput: FC<Props> = ({ className }) => {
  return (
    <label className={className}>
      <input type='text' placeholder='Enter your breed' />
      <img src='/assets/icons/search.svg' alt='' />
    </label>
  )
}

export default SearchInput
