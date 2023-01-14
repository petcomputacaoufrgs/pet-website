import { Link } from './styles'

const ButtonLink = ({ label, link }: { label: string; link: string }) => {
  return <Link href={link}>{label}</Link>
}
export default ButtonLink
