import useIsMobile from '@/hooks/isMobile'
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
  const mobile = useIsMobile()
  const [content, setContent] = useState<ProjectType>()
  const [className, setClassName] = useState('')

  const handleClassName = () => {
    let newClass
    switch (className) {
      case 'top-down-animation':
        newClass = 'down-top-animation'
        break
      case 'down-top-animation':
      default:
        newClass = 'top-down-animation'
        break
    }
    setClassName(newClass)
  }

  const getCustomComponent = (customComponent: string) => {
    const importedComponentModule = require('@/customComponents/' +
      customComponent).default
    return React.createElement(importedComponentModule)
  }

  useEffect(() => {
    let currentPath = window.location.pathname
    let content = projects.find((project) => project.href === currentPath)
    setContent(content as ProjectType)
  }, [])

  const strFromItemList = (items?: string[]) => {
    if (!items || items.length === 0) {
      return ''
    }

    if (items.length === 1) {
      return items[0]
    }

    let outputStr = ''
    items = items.sort()

    // 'A, B, C e D'
    for (let i = 0; i < items.length; i++) {
      if (i === items.length - 1) {
        outputStr += ` e ${items[i]}`
      } else if (i === items.length - 2) {
        outputStr += `${items[i]} ` // make sure there is a space with no comma after penultimate member
      }
      else {
        outputStr += `${items[i]}, `
      }
    }

    return outputStr
  }

  return (
    <>
      {content && (
        <Container>
          <ImgBanner
            src={content.card_banner}
            alt="project background banner"
            height={mobile ? 180 : 336}
          />
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
              {content.name === 'Dragão' ? (
                <Img
                  src={content.page_icon}
                  className={className}
                  onClick={handleClassName}
                  alt={`${content.name} icon`}
                />
              ) : (
                <Img src={content.page_icon} alt={`${content.name} icon`} />
              )}
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
              {content.active_members && content.status === 'ativo' && (
                <>
                  <Subtitle>Participantes Ativos:</Subtitle>
                  <p>{strFromItemList(content.active_members)}</p>
                </>
              )}
              {content.members && (
                <>
                  {content.status === 'ativo' ? (
                    <Subtitle>Outros Participantes:</Subtitle>
                  ) : (
                    <Subtitle>Participantes:</Subtitle>
                  )}

                  {content.status === 'ativo' ? (
                    <p>{strFromItemList(content.members)}</p>
                  ) : (
                      <p>{strFromItemList([...content.active_members ?? [], ...content.members])}</p>
                  )}

                </>
              )}
              <Subtitle>Ferramentas:</Subtitle>
              <p>{strFromItemList(content.tools)}</p>
            </ExtraInfoContainer>
            <CtaContainer>
              {content.cta &&
                content.cta.map((cta, index) => (
                  <ButtonLink
                    type={'arrow-right'}
                    label={cta.label}
                    href={cta.href}
                    target={'_blank'}
                    key={`cta-${index}`}
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
