import BackArrowIcon from './BackArrow'
import ChevronDownIcon from './ChevronDown'
import ChevronLeftIcon from './ChevronLeft'
import ChevronRightIcon from './ChevronRight'
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
      case 'chevron-down':
        return <ChevronDownIcon />
      case 'chevron-left':
        return <ChevronLeftIcon />
      case 'chevron-right':
        return <ChevronRightIcon />
      case 'arrow-back':
        return <BackArrowIcon />
      default:
        return null
    }
  }
  return getIcon()
}
export default Icon
