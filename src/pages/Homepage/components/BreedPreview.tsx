import { Link } from 'react-router-dom'
import BreedPreviewStyled from '../../../components/styled/BreedPreview.styled'

const BreedPreview = () => {
  return (
    <BreedPreviewStyled>
      <div className='breeds'>
        <Link to='/'>
          <span>breedName</span>
        </Link>
        <Link to='/'>
          <span>breedName</span>
        </Link>
        <Link to='/'>
          <span>breedName</span>
        </Link>
      </div>
    </BreedPreviewStyled>
  )
}

export default BreedPreview
