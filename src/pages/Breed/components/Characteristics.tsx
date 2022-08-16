import { FC } from 'react'
import ApiBreedResponseType from '../../../typescript/interfaces/ApiBreedResponse'

interface Props {
  className?: string
  breed: ApiBreedResponseType
}

const Characteristics: FC<Props> = ({ className, breed }) => {
  return (
    <div className={className}>
      <div className='item'>
        <h4>
          Adaptability:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.adaptability}`}></span>
            <span className={`active${breed.adaptability}`}></span>
            <span className={`active${breed.adaptability}`}></span>
            <span className={`active${breed.adaptability}`}></span>
            <span className={`active${breed.adaptability}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Affection level:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.affection_level}`}></span>
            <span className={`active${breed.affection_level}`}></span>
            <span className={`active${breed.affection_level}`}></span>
            <span className={`active${breed.affection_level}`}></span>
            <span className={`active${breed.affection_level}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Child Friendly:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.child_friendly}`}></span>
            <span className={`active${breed.child_friendly}`}></span>
            <span className={`active${breed.child_friendly}`}></span>
            <span className={`active${breed.child_friendly}`}></span>
            <span className={`active${breed.child_friendly}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Grooming:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.grooming}`}></span>
            <span className={`active${breed.grooming}`}></span>
            <span className={`active${breed.grooming}`}></span>
            <span className={`active${breed.grooming}`}></span>
            <span className={`active${breed.grooming}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Intelligence:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.intelligence}`}></span>
            <span className={`active${breed.intelligence}`}></span>
            <span className={`active${breed.intelligence}`}></span>
            <span className={`active${breed.intelligence}`}></span>
            <span className={`active${breed.intelligence}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Health issues:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.health_issues}`}></span>
            <span className={`active${breed.health_issues}`}></span>
            <span className={`active${breed.health_issues}`}></span>
            <span className={`active${breed.health_issues}`}></span>
            <span className={`active${breed.health_issues}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Social needs:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.social_needs}`}></span>
            <span className={`active${breed.social_needs}`}></span>
            <span className={`active${breed.social_needs}`}></span>
            <span className={`active${breed.social_needs}`}></span>
            <span className={`active${breed.social_needs}`}></span>
          </div>
        </h4>
      </div>
      <div className='item'>
        <h4>
          Stranger friendly:{' '}
          <div className='value'>
            {' '}
            <span className={`active${breed.stranger_friendly}`}></span>
            <span className={`active${breed.stranger_friendly}`}></span>
            <span className={`active${breed.stranger_friendly}`}></span>
            <span className={`active${breed.stranger_friendly}`}></span>
            <span className={`active${breed.stranger_friendly}`}></span>
          </div>
        </h4>
      </div>
    </div>
  )
}

export default Characteristics
