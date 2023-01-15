import ArrowLeftIcon from './ArrowLeft'
import ArrowRightIcon from './ArrowRight'
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

const Icon = ({ type, size }: IIcon) => {
  const getIcon = () => {
    switch (type) {
      case 'mail':
        return <MailIcon />
      case 'ig':
        return <InstagramIcon size={size ?? '55'} />
      case 'github':
        return <GithubIcon size={size ?? '55'} />
      case 'linkedin':
        return <LinkedinIcon size={size ?? '55'} />
      case 'yt':
        return <YoutubeIcon size={size ?? '55'} />
      case 'fb':
        return <FacebookIcon size={size ?? '55'} />
      case 'chevron-down':
        return <ChevronDownIcon />
      case 'chevron-left':
        return <ChevronLeftIcon />
      case 'chevron-right':
        return <ChevronRightIcon />
      case 'arrow-left':
        return <ArrowLeftIcon />
      case 'arrow-right':
        return <ArrowRightIcon />
      default:
        return null
    }
  }
  return getIcon()
}
export default Icon
