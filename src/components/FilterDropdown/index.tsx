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
        Filtros
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
            <CheckboxInput
              type="checkbox"
              id="active"
              name="active"
              checked={optionsSelected.includes('ativo')}
              onChange={() => handleOptionClick('ativo')}
            />
            <label htmlFor="active">Ativo</label>
          </InputContainer>
        </OptionsContainer>
      )}
    </Container>
  )
}
export default FilterDropdown
