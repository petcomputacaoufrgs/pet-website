import FilterDropdown from '@/components/FilterDropdown'
import ProjectCard from '@/components/ProjectCard'
import Title from '@/components/Title'
import { projects } from '@/data/projects'
import { ISection } from '@/types/sectionType'
import { useEffect, useState } from 'react'
import { Container, FilterDropdownContainer, ProjectsContainer } from './styles'

const OurWork = ({ id, title }: ISection) => {
  const [optionsSelected, setOptionsSelected] = useState<string[]>([])
  const [projectsDisplayed, setProjectsDisplayed] = useState(projects)

  const handleOptionClick = (option: string) => {
    let newOptions = [...optionsSelected]
    let index = optionsSelected.indexOf(option)

    if (index === -1) {
      newOptions.push(option)
    } else {
      newOptions.splice(index, 1)
    }
    setOptionsSelected(newOptions)
  }

  useEffect(() => {
    let newProjectsList = [...projects]
    let hasStatus =
      optionsSelected.includes('concluído') || optionsSelected.includes('ativo')
    let hasType =
      optionsSelected.includes('projeto') || optionsSelected.includes('curso')

    newProjectsList = newProjectsList.filter((project) => {
      let result = true
      if (hasType) {
        result = optionsSelected.includes(project.type)
      }
      if (
        hasStatus &&
        optionsSelected.includes('projeto') &&
        project.type === 'projeto'
      ) {
        result = optionsSelected.includes(project.status)
      }
      return result
    })
    setProjectsDisplayed(newProjectsList)
  }, [optionsSelected])

  return (
    <Container id={id}>
      <Title type={'section'} text={title} />
      <FilterDropdownContainer>
        <FilterDropdown
          optionsSelected={optionsSelected}
          handleOptionClick={handleOptionClick}
        />
      </FilterDropdownContainer>
      <ProjectsContainer>
        {projectsDisplayed &&
          projectsDisplayed.map((item, index) => (
            <ProjectCard {...item} key={`project-card-${index}`} />
          ))}
      </ProjectsContainer>
    </Container>
  )
}
export default OurWork
