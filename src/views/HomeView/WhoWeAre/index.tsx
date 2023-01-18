import ButtonLink from '@/components/ButtonLink'
import Title from '@/components/Title'
import isMobile from '@/hooks/isMobile'
import { ISection } from '@/types/sectionType'
import {
  Text,
  ButtonWrapper,
  Container,
  VideoFrame,
  VideoContainer,
} from './styles'

const WhoWeAre = ({ id, title, description, cta, video }: ISection) => {
  const mobile = isMobile()

  return (
    <Container id={id}>
      <div>
        <Title type={'section'} text={title} />
        {description &&
          description.map((paragraph) => <Text>{paragraph}</Text>)}
        <ButtonWrapper>
          <ButtonLink label={cta.label} href={cta.href} />
        </ButtonWrapper>
      </div>
      <VideoContainer>
        <VideoFrame
          width={mobile ? '100%' : '632'}
          height={mobile ? 'auto' : '365'}
          src={video.href}
          title={`${video.label} | PET - YouTube`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoFrame>
      </VideoContainer>
    </Container>
  )
}
export default WhoWeAre
