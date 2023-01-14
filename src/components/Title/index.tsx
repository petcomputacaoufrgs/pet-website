import { SubtitleStyle, TitleStyle } from './styles'

const Title = ({ type, text }: { type: 'h1' | 'h2'; text: string }) => {
  const getTitle = () => {
    switch (type) {
      case 'h1':
        return <TitleStyle>{text}</TitleStyle>
      case 'h2':
        return <SubtitleStyle>{text}</SubtitleStyle>
    }
  }
  return getTitle()
}
export default Title
