import InfoStyled from '../../../components/styled/Info.styled'
import GridImgStyled from '../../../components/styled/GridImg.styled'
import TextStyled from '../../../components/styled/Text.styled'

const Info = () => {
  return (
    <InfoStyled>
      <TextStyled
        title='Lorem ipsum dolor sit amet consectetur'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a velit quis ullam. Et, iste
          quia. Id aperiam iure tempore natus dicta aliquid corporis ipsa.'
        linkTitle='Lorem ipsum'
        linkPath='/'
      ></TextStyled>
      <GridImgStyled></GridImgStyled>
    </InfoStyled>
  )
}

export default Info
