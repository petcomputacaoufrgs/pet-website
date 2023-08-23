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

  const createMembersList = (members?: string[]) => {
    if (!members || members.length === 0) {
      return ''
    }

    if (members.length === 1) {
      return members[0]
    }

    let membersList = ''
    members = members.sort()

    // 'A, B, C, e D'
    for (let i = 0; i < members.length; i++) {
      if (i === members.length - 1) {

        membersList += ` e ${members[i]}`
      } else if (i === members.length - 2) {
        membersList += `${members[i]} `
      }
      else {
        membersList += `${members[i]}, `
      }
    }

    return membersList
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
                  <p>{createMembersList(content.active_members)}</p>
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
                    <p>{createMembersList(content.members)}</p>
                  ) : (
                    <p>{createMembersList([...content.active_members ?? [], ...content.members])}</p>
                  )}

                </>
              )}
              <Subtitle>Ferramentas:</Subtitle>
              <p>{content.tools}</p>
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
