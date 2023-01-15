import { SubtitleStyle, TitleStyle } from './styles'

const Title = ({
  type,
  variant = 'primary',
  text,
}: {
  type: 'h1' | 'h2'
  variant?: 'primary' | 'secondary'
  text: string
}) => {
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
