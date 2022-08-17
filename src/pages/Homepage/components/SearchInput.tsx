import { FC, useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BreedContext from '../../../context/BreedContext'

interface Props {
  className?: string
}

const SearchInput: FC<Props> = ({ className }) => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [focus, setFocus] = useState(false)
  const { breeds } = useContext(BreedContext)
  const input = useRef<null | HTMLInputElement>(null)

  const validBreed = breeds.filter((breed) => {
    if (breed.name.toLowerCase().includes(value.toLowerCase())) return true
  })

  const onChangeHandler = () => {
    if (input.current) {
      setValue(input.current.value)
    }
  }

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setValue(e.currentTarget.innerHTML)
    setFocus(false)
  }

  const onFocusHandler = () => {
    setFocus(true)
  }

  const moveToPageHandler = () => {
    const breedSelected = breeds.find((breed) => {
      if (breed.name.toLowerCase().includes(value.toLowerCase())) return true
    })

    if (breedSelected) {
      navigate(`/${breedSelected.id}`)
    }
  }

  return (
    <label className={className}>
      <input
        type='text'
        placeholder='Enter your breed'
        ref={input}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
      />
      <button className='go' onClick={moveToPageHandler}>
        GO
      </button>

      {focus && (
        <div className='results'>
          {validBreed.map((breed) => {
            console.log(breed)
            return (
              <div key={breed.id} onClick={onClickHandler}>
                {breed.name}
              </div>
            )
          })}
        </div>
      )}
    </label>
  )
}

export default SearchInput
