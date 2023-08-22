import FilterDropdown from '@/components/FilterDropdown'
import ProjectCard from '@/components/ProjectCard'
import Title from '@/components/Title'
import { projects } from '@/data/projects'
import { ISection } from '@/types/sectionType'
import { useEffect, useState } from 'react'
import { Container, FilterDropdownContainer, ProjectsContainer } from './styles'

type axis = ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento')[]
const projectTypes = ['projeto', 'curso']
const projectStatus = ['concluído', 'ativo']
const projectAxis = ['interação', 'ensino', 'pesquisa', 'desenvolvimento']
const projectSubtypes = [...projectStatus, ...projectAxis]
const startOptions = [...projectTypes, ...projectSubtypes]

const OurWork = ({ id, title }: ISection) => {
  const [optionsSelected, setOptionsSelected] = useState(startOptions)
  const [projectsDisplayed, setProjectsDisplayed] = useState(projects)

  const handleOptionClick = (option: string) => {
    let newOptions = [...optionsSelected]
    let index = optionsSelected.indexOf(option)

    if (index === -1) {
      newOptions.push(option)
    } else {
      newOptions.splice(index, 1)
    }

    const hasAxis = newOptions.some((element) => projectAxis.includes(element))
    if (!hasAxis) {
      if (newOptions.includes('projeto')) {
        newOptions.push(...projectAxis)
      }
    }

    const hasStatus = newOptions.some((element) => projectStatus.includes(element))
    if (!hasStatus) {
      if (newOptions.includes('projeto')) {
        newOptions.push(...projectStatus)
      }
    }

    const hasType = newOptions.some((element) => projectTypes.includes(element))
    if (!hasType) {
      newOptions.push(...projectTypes)
      projectSubtypes.forEach((subtype) => {
        if (!newOptions.includes(subtype)) {
          newOptions.splice(newOptions.indexOf(subtype), 1)
        }
      })
    }

    const hasProject = newOptions.includes('projeto')
    if (!hasProject) {
      projectSubtypes.forEach((subtype) => {
        if (newOptions.includes(subtype)) {
          newOptions.splice(newOptions.indexOf(subtype), 1)
        }
      })
    }

    if (newOptions.length === 0) {
      newOptions.push('projeto')
      newOptions.push(...projectSubtypes)
      newOptions.push('curso')
    }	

    setOptionsSelected(newOptions)
  }

  useEffect(() => {
    let newProjectsList = [...projects]
    let hasStatus = optionsSelected.some((element) => projectStatus.includes(element))
    let hasType = optionsSelected.some((element) => projectTypes.includes(element))
    let hasAxis = optionsSelected.some((element) => projectAxis.includes(element))

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
        if (hasAxis) {
          let onlyAxis: ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento')[] = optionsSelected.filter((element) => projectAxis.includes(element)) as axis
          let projectHasAxis = project.axis.some((element) => onlyAxis.includes(element))
          result = optionsSelected.includes(project.status) && projectHasAxis
        }
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
