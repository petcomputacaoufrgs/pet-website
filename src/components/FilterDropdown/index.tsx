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
              checked={optionsSelected.includes('courses')}
              onClick={() => handleOptionClick('courses')}
            />
            <label htmlFor="courses">Cursos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="projects"
              name="projects"
              checked={optionsSelected.includes('projects')}
              onClick={() => handleOptionClick('projects')}
            />
            <label htmlFor="projects">Projetos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="finished"
              name="finished"
              checked={optionsSelected.includes('finished')}
              onClick={() => handleOptionClick('finished')}
            />
            <label htmlFor="finished">Concluído</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={optionsSelected.includes('active')}
              onClick={() => handleOptionClick('active')}
            />
            <label htmlFor="active">Ativo</label>
          </div>
        </div>
      )}
    </div>
  )
}
export default FilterDropdown
