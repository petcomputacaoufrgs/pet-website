import ProjectCard from '@/components/ProjectCard'
import Title from '@/components/Title'
import { projects } from '@/data/projects'
import { ISection } from '@/types/sectionType'
import { useEffect, useState } from 'react'
import { 
  Container, 
  ProjectsContainer,
  ToggleContainer,
  ToggleButtonWrapper,
  ToggleButton,
  FiltersContainer,
  AxisFilters,
  AxisFilterButton,
  StatusFilters,
  StatusFilterButton,
  StatusIndicator
} from './styles'

import { theme } from '@/styles/theme'

const projectStatus = ['concluído', 'ativo']
const projectAxis = ['ensino', 'pesquisa', 'extensão', 'desenvolvimento', 'interação']
const startOptions = ['ativo', 'concluído', ...projectAxis]

const getAxisColor = (axis: string): string => {
  const colorMap: Record<string, string> = {
    'ensino': theme.colors.ensino,
    'pesquisa': theme.colors.pesquisa,
    'extensão': theme.colors.extensao,
    'desenvolvimento': theme.colors.desenvolvimento,
    'interação': theme.colors.interacao,
  }
  return colorMap[axis] || theme.colors.accent
}

type ViewMode = 'projetos' | 'cursos'

const OurWork = ({ id, title }: ISection) => {
  const [viewMode, setViewMode] = useState<ViewMode>('projetos')
  const [optionsSelected, setOptionsSelected] = useState(startOptions)
  const [projectsDisplayed, setProjectsDisplayed] = useState(projects)

  const handleOptionClick = (option: string) => {
    let newOptions = [...optionsSelected]
    
    // Se clicar em um status
    if (projectStatus.includes(option)) {
      const isCurrentlyActive = newOptions.includes(option)
      const otherStatus = projectStatus.find(s => s !== option)
      const isOtherActive = otherStatus && newOptions.includes(otherStatus)
      
      if (isCurrentlyActive) {
        // Tentando desativar
        if (isOtherActive) {
          // Outro está ativo, pode desativar este
          newOptions = newOptions.filter(opt => opt !== option)
        } else {
          // Outro está inativo, não pode deixar ambos inativos
          // Remove o atual e ativa o outro
          newOptions = newOptions.filter(opt => !projectStatus.includes(opt))
          if (otherStatus) {
            newOptions.push(otherStatus)
          }
        }
      } else {
        // Tentando ativar, apenas adiciona
        newOptions.push(option)
      }
    } else {
      // Para eixos, comportamento normal de toggle
      let index = newOptions.indexOf(option)
      
      if (index === -1) {
        newOptions.push(option)
      } else {
        newOptions.splice(index, 1)
      }

      // Se nenhum eixo estiver selecionado, seleciona todos
      const hasAxis = newOptions.some((element) => projectAxis.includes(element))
      if (!hasAxis) {
        newOptions.push(...projectAxis)
      }
    }

    setOptionsSelected(newOptions)
  }

  useEffect(() => {
    let newProjectsList = [...projects]
    
    if (viewMode === 'cursos') {
      // Mostrar apenas cursos
      newProjectsList = newProjectsList.filter((project) => project.type === 'curso')
    } else {
      // Mostrar apenas projetos com filtros aplicados
      newProjectsList = newProjectsList.filter((project) => {
        if (project.type !== 'projeto') {
          return false
        }

        const projectHasStatus = optionsSelected.includes(project.status)

        const onlyAxis = optionsSelected.filter((element) => projectAxis.includes(element)) as ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento' | 'extensão')[]
        const projectHasAxis = project.axis.some((element) => onlyAxis.includes(element))

        return projectHasStatus && projectHasAxis
      })
    }
    
    setProjectsDisplayed(newProjectsList)
  }, [optionsSelected, viewMode])

  return (
    <Container id={id}>
      <Title type={'section'} text={title} />
      
      <ToggleContainer>
        <ToggleButtonWrapper>
          <ToggleButton 
            isActive={viewMode === 'projetos'}
            colorType="projects"
            onClick={() => setViewMode('projetos')}
          >
            Projetos
          </ToggleButton>
          <ToggleButton 
            isActive={viewMode === 'cursos'}
            colorType="courses"
            onClick={() => setViewMode('cursos')}
          >
            Cursos
          </ToggleButton>
        </ToggleButtonWrapper>
      </ToggleContainer>

      {viewMode === 'projetos' && (
        <FiltersContainer>
          <AxisFilters>
            {projectAxis.map((axis) => (
              <AxisFilterButton
                key={axis}
                isActive={optionsSelected.includes(axis)}
                color={getAxisColor(axis)}
                onClick={() => handleOptionClick(axis)}
              >
                {axis.charAt(0).toUpperCase() + axis.slice(1)}
              </AxisFilterButton>
            ))}
          </AxisFilters>
          <StatusFilters>
            <StatusFilterButton
              isActive={optionsSelected.includes('ativo')}
              onClick={() => handleOptionClick('ativo')}
            >
              <StatusIndicator isActive={optionsSelected.includes('ativo')} color={theme.colors.ativo} />
              Ativos
            </StatusFilterButton>
            <StatusFilterButton
              isActive={optionsSelected.includes('concluído')}
              onClick={() => handleOptionClick('concluído')}
            >
              <StatusIndicator isActive={optionsSelected.includes('concluído')} color={theme.colors.concluido} />
              Concluídos
            </StatusFilterButton>
          </StatusFilters>
        </FiltersContainer>
      )}
      
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
