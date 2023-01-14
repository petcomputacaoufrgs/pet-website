import BackArrowIcon from './BackArrow'
import ChevronIcon from './Chevron'
import FacebookIcon from './Facebook'
import GithubIcon from './Github'
import InstagramIcon from './Instagram'
import LinkedinIcon from './Linkedin'
import MailIcon from './Mail'
import { IIcon } from './types'
import YoutubeIcon from './Youtube'

const Icon = ({ type }: IIcon) => {
  const getIcon = () => {
    switch (type) {
      case 'mail':
        return <MailIcon />
      case 'ig':
        return <InstagramIcon />
      case 'github':
        return <GithubIcon />
      case 'linkedin':
        return <LinkedinIcon />
      case 'yt':
        return <YoutubeIcon />
      case 'fb':
        return <FacebookIcon />
      case 'chevron':
        return <ChevronIcon />
      case 'arrow-back':
        return <BackArrowIcon />
      default:
        return null
    }
  }
  return getIcon()
}
export default Icon
