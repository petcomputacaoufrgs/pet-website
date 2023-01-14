import ButtonLink from '@/components/ButtonLink'
import Title from '@/components/Title'
import {
  Text,
  ButtonWrapper,
  Container,
  VideoFrame,
  VideoContainer,
} from './styles'

const WhoWeAre = () => {
  return (
    <Container id="who-we-are">
      <div>
        <Title type={'h2'} text={'Quem somos?'} />
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
          <ButtonLink label={'Conheça nossos membros'} link={'/petianes'} />
        </ButtonWrapper>
      </div>
      <VideoContainer>
        <VideoFrame
          src="https://www.youtube.com/embed/mbK682vVP7c?rel=0&cc_load_policy=1&iv_load_policy=3&color=white&disablekb=1"
          width="632"
          height="365"
          title="PET Computação UFRGS - Vídeo Institucional"
          allowFullScreen
        ></VideoFrame>
      </VideoContainer>
    </Container>
  )
}
export default WhoWeAre
