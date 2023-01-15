import Icon from '../Icon'
import { ArrowLeft, ArrowRight, Link } from './styles'
import { IButtonLink } from './types'

const ButtonLink = ({ type, label, href, color = 'default' }: IButtonLink) => {
  const getButton = () => {
    switch (type) {
      case 'arrow-left':
        return (
          <ArrowLeft href={href} color={color}>
            <Icon type="arrow-left" />
            {label}
          </ArrowLeft>
        )
      case 'arrow-right':
        return (
          <ArrowRight href={href}>
            {label}
            <Icon type="arrow-right" />
          </ArrowRight>
        )
      default:
        return <Link href={href}>{label}</Link>
    }
  }
  return getButton()
}
export default ButtonLink
