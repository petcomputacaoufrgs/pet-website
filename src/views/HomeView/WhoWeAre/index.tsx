import ButtonLink from '@/components/ButtonLink'
import Title from '@/components/Title'
import isMobile from '@/hooks/isMobile'
import {
  Text,
  ButtonWrapper,
  Container,
  VideoFrame,
  VideoContainer,
} from './styles'

const WhoWeAre = () => {
  const mobile = isMobile()

  return (
    <Container id="who-we-are">
      <div>
        <Title type={'section'} text={'Quem somos?'} />
        <Text>
          O PET Computação é um grupo composto por estudantes de graduação dos
          cursos de Ciência da Computação e Engenharia da Computação.
        </Text>
        <Text>
          Baseado na Tríade Acadêmica de Ensino, Pesquisa e Extensão, tem como
          objetivo providenciar a oportunidade dos membros explorarem áreas de
          interesse além do currículo de seus cursos.
        </Text>
        <ButtonWrapper>
          <ButtonLink label={'Conheça nossos membros'} href={'/petianes'} />
        </ButtonWrapper>
      </div>
      <VideoContainer>
        <VideoFrame
          width={mobile ? '100%' : '632'}
          height={mobile ? 'auto' : '365'}
          src="https://www.youtube.com/embed/CDoDrSizhCg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoFrame>
      </VideoContainer>
    </Container>
  )
}
export default WhoWeAre
