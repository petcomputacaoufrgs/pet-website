import Footer from '@/components/Footer'
import  Header  from '@/components/Header'

import header from '@/images/header.png'
import styled from 'styled-components'
import { Container, ContentContainer, ContentText, HeaderTitle, Section, SectionTitle, StyledImage, Subtitle, TimelineContainer } from './styles'
import { devices } from '@/styles/devices'

import logoPetGenerica from '@/images/LogoPETGenerica.png'
import logoPetComp from '@/images/LogoPETComp.png'



const AboutView = () => {

  return (
    <Container >
      <Header image={header.src} backLink="/" backText="Voltar a Home">
        <HeaderTitle>
          QUEM SOMOS
        </HeaderTitle>
      </Header>


    <TimelineContainer>
      
      <Section>
        <SectionTitle>O que é o Programa de Educação Tutorial (PET)?</SectionTitle>

        <ContentContainer>  
        <ContentText>
          <p>O PET é um programa do Governo Federal que visa elevar a qualidade da formação acadêmica dos estudantes de graduação. 
            Sob a orientação de um tutor, o grupo de 12 bolsistas trabalha de forma coletiva para vivenciar o tripé universitário: Ensino, Pesquisa e Extensão.</p>
          
          <p>Mais do que uma bolsa remunerada de R$700,00, o PET é um espaço de aprendizado e desenvolvimento pessoal. 
            Trabalhamos de maneira horizontal, dividindo lideranças, dando liberdade de escolha para participar ou até criar projetos, assim promovendo autonomia, proatividade e trabalho em equipe.</p>

        </ContentText>

        <StyledImage src={logoPetGenerica.src} alt="Logo programa PET"></StyledImage>


      </ContentContainer>
      </Section>

      <Section>
        <SectionTitle>PET Computação UFRGS</SectionTitle>
        <ContentText>

          <ContentContainer>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <p>O PET Computação é formado por estudantes dos cursos de Ciência e Engenharia da Computação da UFRGS. Somos um grupo plural que acolhe desde veteranos até calouros. 
            Buscamos explorar tecnologias atuais e áreas de interesse dos participantes, assim como desenvolver iniciativas que ajudam a comunidade acadêmica, muitas vezes trabalhando juntamente com professores e a direção do Instituto de Informática.</p>
          

          </div>
          <StyledImage src={logoPetComp.src} alt="Logo PET Computação UFRGS"></StyledImage>
          
          </ContentContainer>

          <p>Por isso, trabalhamos em 5 eixos:</p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>

            <div>
            <Subtitle>Pesquisa:</Subtitle>
            <p>Aprofundamento e exploração de novos conhecimentos, tipicamente produzindo artigos científicos.</p>
            </div>

            <div>
            <Subtitle>Ensino:</Subtitle>
            <p>Envolve a criação de aulas para alunos do INF, reforçando e complementando o aprendizado do curso, além de aulas de computação básica para escolas da região, promovendo o aprendizado da área.</p>
            </div>

            <div>
            <Subtitle>Extensão:</Subtitle>
            <p>Alguns dos nossos projetos contabilizam horas de extensão ao envolverem a comunidade externa, seja através de eventos, aulas ou desenvolvimento de ferramentas para outros grupos.</p>
            </div>

            <div>
            <Subtitle>Desenvolvimento:</Subtitle>
            <p>Criamos ferramentas e sistemas (como conversores de currículo e sites de auxílio acadêmico) que impactam diretamente na vida dos estudantes e nas iniciativas da comunidade.</p>
            </div>

            <div>
            <Subtitle>Integração:</Subtitle>
            <p>Organizamos eventos que fortalecem o convívio e o bem-estar no espaço universitário, como feiras de carreiras, mostras culturais, recepções e competições estudantis.</p>
            </div>

          </div>

          <p>Buscamos também interdisciplinaridade e intercâmbio de conhecimento através de atividades conjuntas com outros grupos PET, contando com participações em eventos locais, regionais e nacionais (Interpet, SulPET e ENAPET).</p>
        </ContentText>
      </Section>

      <Section>
        <SectionTitle>Como participar?</SectionTitle>
        <ContentText>
          <p>O ingresso no grupo ocorre por meio de um processo seletivo anual. Candidatos podem ser selecionados para vagas imediatas ou para nossa lista de espera.</p>

          <p style={{fontWeight: "bold"}}>Quer se candidatar?</p>
          
          <p>Acompanhe nosso perfil no <a href='https://www.instagram.com/petcompufrgs/' target='_blank'>Instagram</a> para ver as notícias do grupo, se as inscrições estiverem abertas vamos anunciar lá, nas comunidades do whatsapp e no grupo de webmails do INF da gradução. 
            O edital e formulário de inscrição de um processo seletivo aberto ficam no nosso <a href='https://lnk.bio/lEJP?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGntSJd12H4KfTWuoJCVTPLDyZXdtYRNmWaF-eJBFmbmEWYfY0OQajaHb-_tRM_aem_toRqy943KtFBmBNxnTiPGw' target='_blank'>Linktree</a>.</p>
        
        </ContentText>
      </Section>

    </TimelineContainer>


      <Footer />

    </Container>
  )
}
export default AboutView
