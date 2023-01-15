import BackHomeButton from '@/components/BackHomeButton'
import Footer from '@/components/Footer'
import ImgBanner from '@/components/ImgBanner'
import Tag from '@/components/Tag'
import Title from '@/components/Title'
import { ProjectType, CourseType, projects } from '@/data/projects'
import { useEffect, useState } from 'react'
import {
  BackHomeContainer,
  Circle,
  Container,
  ExtraInfoContainer,
  Header,
  IconContainer,
  Img,
  Main,
  Subtitle,
  TagContainer,
  Text,
} from './styles'

const ProjectTemplateView = () => {
  const [content, setContent] = useState<ProjectType>()
  useEffect(() => {
    let currentPath = window.location.pathname
    let content = projects.find((project) => project.href === currentPath)
    setContent(content as ProjectType)
  }, [])

  return (
    <div>
      {content && (
        <Container>
          <ImgBanner src={content.card_banner} height={336} />
          <BackHomeContainer>
            <BackHomeButton color="white" />
          </BackHomeContainer>
          <Header>
            <IconContainer>
              <Img src={content.page_icon} />
              <Circle />
            </IconContainer>
            <Title type={'h1'} text={`Projeto ${content.name}`} />
          </Header>
          <Main>
            <TagContainer>
              <Tag label={content.status} />
              {content.axis.map((axis) => (
                <Tag label={axis} key={`axis-${axis}`} />
              ))}
            </TagContainer>
            {content.text.map((paragraph, index) => (
              <Text key={`text-p-${index}`}>{paragraph}</Text>
            ))}
            <ExtraInfoContainer>
              <Subtitle>Participantes:</Subtitle>
              <p>{content.members}</p>
              <Subtitle>Ferramentas:</Subtitle>
              <p>{content.tools}</p>
            </ExtraInfoContainer>
          </Main>
          <Footer />
        </Container>
      )}
    </div>
  )
}
export default ProjectTemplateView
