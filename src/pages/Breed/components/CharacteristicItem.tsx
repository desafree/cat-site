import { FC } from 'react'

interface Props {
  title: string
  intensity: number
}

const CharacteristicItem: FC<Props> = ({ title, intensity }) => {
  return (
    <div className='item'>
      <h4>
        {title}:{' '}
        <div className='value'>
          {' '}
          <span className={`active${intensity}`}></span>
          <span className={`active${intensity}`}></span>
          <span className={`active${intensity}`}></span>
          <span className={`active${intensity}`}></span>
          <span className={`active${intensity}`}></span>
        </div>
      </h4>
    </div>
  )
}

export default CharacteristicItem
