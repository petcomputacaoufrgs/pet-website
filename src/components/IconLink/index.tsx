import Icon from '../Icon'
import { Container } from './styles'
import { IIconLink } from './types'

const IconLink = ({ iconType, href }: IIconLink) => {
  return (
    <Container target="_blank" href={href}>
      <Icon type={iconType} />
    </Container>
  )
}
export default IconLink
