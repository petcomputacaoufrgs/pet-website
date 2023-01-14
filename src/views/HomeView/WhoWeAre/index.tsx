import ButtonLink from '@/components/ButtonLink'
import Title from '@/components/Title'
import { Text, ButtonWrapper, Container } from './styles'

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
      <div> Aqui tem um vídeo </div>
    </Container>
  )
}
export default WhoWeAre
