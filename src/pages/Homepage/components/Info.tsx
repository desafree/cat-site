import InfoStyled from '../../../components/styled/Info.styled'
import GridImgStyled from '../../../components/styled/GridImg.styled'
import TextStyled from '../../../components/styled/Text.styled'

const Info = () => {
  return (
    <InfoStyled>
      <TextStyled
        title='Why should you have a cat?'
        description='Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves'
        linkTitle='Discover cats breeds'
        linkPath='https://www.petfinder.com/pet-adoption/cat-adoption/'
      ></TextStyled>
      <GridImgStyled></GridImgStyled>
    </InfoStyled>
  )
}

export default Info
