import Icon from '../Icon'
import { Container } from './styles'
import { IIconLink } from './types'

const IconLink = ({ iconType, href, size }: IIconLink) => {
  return (
    <Container target="_blank" href={href}>
      <Icon type={iconType} size={size} />
    </Container>
  )
}
export default IconLink
