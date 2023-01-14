import FilterDropdown from '@/components/FilterDropdown'
import ProjectCard from '@/components/ProjectCard'
import Title from '@/components/Title'
import { projects } from '@/data/projects'
import { useState } from 'react'
import { Container, ProjectsContainer } from './styles'

const OurWork = () => {
  const [optionsSelected, setOptionsSelected] = useState<string[]>([])
  const handleOptionClick = (option: string) => {
    console.log(optionsSelected)
    console.log(option)
    let newOptions = [...optionsSelected]
    let index = optionsSelected.indexOf(option)

    console.log(index)

    if (index === -1) {
      console.log('não achei')
      newOptions.push(option)
    } else {
      console.log('achei')
      newOptions = newOptions.slice(index, 1)
    }

    console.log(newOptions)
    setOptionsSelected(newOptions)
  }
  return (
    <Container>
      <Title type={'h2'} text={'Nosso trabalho'} />
      <FilterDropdown
        optionsSelected={optionsSelected}
        handleOptionClick={handleOptionClick}
      />
      <ProjectsContainer>
        {projects.map((item, index) => (
          <ProjectCard {...item} key={`project-card-${index}`} />
        ))}
      </ProjectsContainer>
    </Container>
  )
}
export default OurWork
