import { SubtitleStyle, TitleStyle } from './styles'
import { ITitle } from './types'

const Title = ({ type, variant = 'primary', text }: ITitle) => {
  const getTitle = () => {
    switch (type) {
      case 'h1':
        return <TitleStyle variant={variant}>{text}</TitleStyle>
      case 'h2':
        return <SubtitleStyle>{text}</SubtitleStyle>
    }
  }
  return getTitle()
}
export default Title
