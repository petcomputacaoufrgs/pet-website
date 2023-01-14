import ImgBanner from '../ImgBanner'
import Tag from '../Tag'
import { Container, Description, Name } from './styles'
import { IProjectCard } from './types'

const ProjectCard = ({
  type,
  card_banner,
  href,
  name,
  description,
}: IProjectCard) => {
  return (
    <Container href={href} target={type === 'curso' ? '_blank' : '_self'}>
      <ImgBanner src={card_banner} height={195} />
      <Tag label={type} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  )
}
export default ProjectCard
