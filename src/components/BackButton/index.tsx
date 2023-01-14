import Icon from '../Icon'
import { Link } from './styles'

const BackButton = () => {
  return (
    <Link href={'/'}>
      <Icon type="arrow-back" />
      voltar a home
    </Link>
  )
}
export default BackButton
