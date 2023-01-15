import Icon from '../Icon'
import { Link } from './styles'
import { IBackHomeButton } from './type'

const BackHomeButton = ({ color }: IBackHomeButton) => {
  return (
    <Link href={'/'} color={color}>
      <Icon type="arrow-back" />
      voltar a home
    </Link>
  )
}
export default BackHomeButton
