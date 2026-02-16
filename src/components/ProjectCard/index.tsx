import ImgBanner from '../ImgBanner'
import Tag from '../Tag'
import { Container, Description, Name, TagsContainer, MoreTags } from './styles'
import { IProjectCard } from './types'

const ProjectCard = ({
  type,
  axis,
  card_banner,
  href,
  name,
  description,
}: IProjectCard) => {
  const maxTags = 2
  const displayedAxis = axis?.slice(0, maxTags)
  const hasMoreTags = axis && axis.length > maxTags

  return (
    <Container href={href} target={type === 'curso' ? '_blank' : '_self'}>
      <ImgBanner src={card_banner} height={195} alt={`${name} banner image`} />
      {axis && axis.length > 0 && (
        <TagsContainer>
          {displayedAxis?.map((eixo, index) => (
            <Tag key={`tag-${index}`} label={eixo} />
          ))}
          {hasMoreTags && <MoreTags>...</MoreTags>}
        </TagsContainer>
      )}
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  )
}
export default ProjectCard
