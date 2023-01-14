import Icon from '../Icon'
import { IIconLink } from './types'

const IconLink = ({ iconType, href }: IIconLink) => {
  return (
    <a target="_blank" href={href}>
      <Icon type={iconType} />
    </a>
  )
}
export default IconLink
