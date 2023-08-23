import { useState } from 'react'
import Icon from '../Icon'
import {
  Container,
  CheckboxInput,
  IconContainer,
  DropdownInput,
  InputContainer,
  OptionsContainer,
  VerticalLine,
} from './styles'
import { IFilterDropdown } from './type'

const FilterDropdown = ({
  optionsSelected,
  handleOptionClick,
}: IFilterDropdown) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <Container>
      <DropdownInput onClick={() => setShowDropdown(!showDropdown)}>
        Filtrar
        <VerticalLine />
        <IconContainer isOpen={showDropdown}>
          <Icon type="chevron-down" />
        </IconContainer>
      </DropdownInput>
      {showDropdown && (
        <OptionsContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="courses"
              name="courses"
              checked={optionsSelected.includes('curso')}
              onChange={() => handleOptionClick('curso')}
            />
            <label htmlFor="courses">Cursos</label>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="projects"
              name="projects"
              checked={optionsSelected.includes('projeto')}
              onChange={() => handleOptionClick('projeto')}
            />
            <label htmlFor="projects">Projetos</label>
          </InputContainer>

          <InputContainer>
            Estado:
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="active"
              name="active"
              checked={optionsSelected.includes('ativo')}
              onChange={() => handleOptionClick('ativo')}
            />
            <label htmlFor="active">Ativo</label>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="finished"
              name="finished"
              checked={optionsSelected.includes('concluído')}
              onChange={() => handleOptionClick('concluído')}
            />
            <label htmlFor="finished">Concluído</label>
          </InputContainer>

          <InputContainer>
            Eixos:
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="teaching"
              name="teaching"
              checked={optionsSelected.includes('ensino')}
              onChange={() => handleOptionClick('ensino')}
            />
            <label htmlFor="teaching">Ensino</label>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="research"
              name="research"
              checked={optionsSelected.includes('pesquisa')}
              onChange={() => handleOptionClick('pesquisa')}
            />
            <label htmlFor="research">Pesquisa</label>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="development"
              name="development"
              checked={optionsSelected.includes('desenvolvimento')}
              onChange={() => handleOptionClick('desenvolvimento')}
            />
            <label htmlFor="development">Desenvolvimento</label>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              type="checkbox"
              id="interaction"
              name="interaction"
              checked={optionsSelected.includes('interação')}
              onChange={() => handleOptionClick('interação')}
            />
            <label htmlFor="interaction">Interação</label>
          </InputContainer>
        </OptionsContainer>
      )}
    </Container>
  )
}
export default FilterDropdown
