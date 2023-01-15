import isMobile from '@/hooks/isMobile'
import ButtonLink from '@/components/ButtonLink'
import Footer from '@/components/Footer'
import ImgBanner from '@/components/ImgBanner'
import Tag from '@/components/Tag'
import Title from '@/components/Title'
import { projects } from '@/data/projects'
import { useEffect, useState } from 'react'
import {
  BackHomeContainer,
  Circle,
  Container,
  CtaContainer,
  ExtraInfoContainer,
  Header,
  IconContainer,
  Img,
  Main,
  Subtitle,
  TagContainer,
  Text,
} from './styles'
import { ProjectType } from '@/types/projectsType'
import React from 'react'

const ProjectTemplateView = () => {
  const mobile = isMobile()
  const [content, setContent] = useState<ProjectType>()

  useEffect(() => {
    let currentPath = window.location.pathname
    let content = projects.find((project) => project.href === currentPath)
    setContent(content as ProjectType)
  }, [])

  const getCustomComponent = (customComponent: string) => {
    const importedComponentModule = require('@/customComponents/' +
      customComponent).default
    return React.createElement(importedComponentModule)
  }

  return (
    <>
      {content && (
        <Container>
          <ImgBanner src={content.card_banner} height={mobile ? 180 : 336} />
          <BackHomeContainer>
            <ButtonLink
              type={'arrow-left'}
              label={'voltar a home'}
              href={'/'}
              color={'white'}
            />
          </BackHomeContainer>
          <Header>
            <IconContainer>
              <Img src={content.page_icon} />
              <Circle />
            </IconContainer>
            <Title type={'project'} text={`Projeto ${content.name}`} />
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
            <CtaContainer>
              {content.cta &&
                content.cta.map((cta) => (
                  <ButtonLink
                    type={'arrow-right'}
                    label={cta.label}
                    href={cta.href}
                    target={'_blank'}
                  />
                ))}
            </CtaContainer>
            {content.customContent && getCustomComponent(content.customContent)}
          </Main>
          <Footer />
        </Container>
      )}
    </>
  )
}
export default ProjectTemplateView
