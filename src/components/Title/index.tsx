import { PageTitle, SectionTitle, ProjectTitle, DefaultTitle } from './styles'
import { ITitle } from './types'

const Title = ({ type, text }: ITitle) => {
  const getTitle = () => {
    switch (type) {
      case 'page':
        return <PageTitle>{text}</PageTitle>
      case 'project':
        return <ProjectTitle>{text}</ProjectTitle>
      case 'section':
        return <SectionTitle>{text}</SectionTitle>
      default:
        return <DefaultTitle>{text}</DefaultTitle>
    }
  }
  return getTitle()
}
export default Title
