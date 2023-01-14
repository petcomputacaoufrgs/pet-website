import { useState } from 'react'
import { IFilterDropdown } from './type'

const FilterDropdown = ({
  optionsSelected,
  handleOptionClick,
}: IFilterDropdown) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Dropdown</button>
      {showDropdown && (
        <div>
          <div>
            <input
              type="checkbox"
              id="courses"
              name="courses"
              checked={optionsSelected.includes('curso')}
              onChange={() => handleOptionClick('curso')}
            />
            <label htmlFor="courses">Cursos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="projects"
              name="projects"
              checked={optionsSelected.includes('projeto')}
              onChange={() => handleOptionClick('projeto')}
            />
            <label htmlFor="projects">Projetos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="finished"
              name="finished"
              checked={optionsSelected.includes('concluído')}
              onChange={() => handleOptionClick('concluído')}
            />
            <label htmlFor="finished">Concluído</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={optionsSelected.includes('ativo')}
              onChange={() => handleOptionClick('ativo')}
            />
            <label htmlFor="active">Ativo</label>
          </div>
        </div>
      )}
    </div>
  )
}
export default FilterDropdown
