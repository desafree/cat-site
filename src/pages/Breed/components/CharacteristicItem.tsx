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
        <div className='value' data-testid='container'>
          {' '}
          <span
            className={`active${
              intensity >= 0 && intensity <= 5
                ? intensity
                : intensity <= 0
                ? 1
                : intensity > 5
                ? 5
                : 1
            }`}
          ></span>
          <span
            className={`active${
              intensity >= 0 && intensity <= 5
                ? intensity
                : intensity <= 0
                ? 1
                : intensity > 5
                ? 5
                : 1
            }`}
          ></span>
          <span
            className={`active${
              intensity >= 0 && intensity <= 5
                ? intensity
                : intensity <= 0
                ? 1
                : intensity > 5
                ? 5
                : 1
            }`}
          ></span>
          <span
            className={`active${
              intensity >= 0 && intensity <= 5
                ? intensity
                : intensity <= 0
                ? 1
                : intensity > 5
                ? 5
                : 1
            }`}
          ></span>
          <span
            className={`active${
              intensity >= 0 && intensity <= 5
                ? intensity
                : intensity <= 0
                ? 1
                : intensity > 5
                ? 5
                : 1
            }`}
          ></span>
        </div>
      </h4>
    </div>
  )
}

export default CharacteristicItem
