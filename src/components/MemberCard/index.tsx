import {
  CardHeader,
  CardNumber,
  Container,
  Details,
  InterestsContainer,
  InterestTitle,
  MainInfoContainer,
  MemberImg,
  Name,
} from './styles'
import { IMemberCard } from './types'

const MemberCard = ({ member, index }: IMemberCard) => {
  const { imgUrl, name, course, semester, interest } = member

  const getCourse = () => {
    switch (course) {
      case 'cic':
        return 'Ciência da Computação'
      case 'ecp':
        return 'Engenharia da Computação'
      case 'orientador':
        return 'Orientadore'
    }
  }

  return (
    <Container>
      <CardHeader>
        <CardNumber>{index}</CardNumber>
        <MemberImg src={imgUrl} alt={`${name} profile image`} />
      </CardHeader>
      <MainInfoContainer>
        <Name>{name}</Name>
        <Details>{getCourse()}</Details>
        <Details>{semester}</Details>
      </MainInfoContainer>
      <InterestsContainer>
        <InterestTitle>Area(s) de interesse:</InterestTitle>
        <p>{interest}</p>
      </InterestsContainer>
    </Container>
  )
}
export default MemberCard
