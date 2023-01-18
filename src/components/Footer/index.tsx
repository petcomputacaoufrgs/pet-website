import { footer } from '@/data/footer'
import useIsMobile from '@/hooks/isMobile'
import Icon from '../Icon'
import IconLink from '../IconLink'
import {
  ContactUs,
  Container,
  Email,
  EmailContainer,
  SocialMedia,
  SocialMediaContainer,
} from './styles'

const Footer = () => {
  const mobile = useIsMobile()

  return (
    <Container id="contact-us">
      <div>
        <ContactUs>Entre em contato</ContactUs>
        <EmailContainer>
          <Icon type="mail" />
          <Email href={`mailto:${footer.mail}`}>pet@inf.ufrgs.br</Email>
        </EmailContainer>
      </div>
      <div>
        <SocialMedia>Nossas redes sociais</SocialMedia>
        <SocialMediaContainer>
          {footer.socialMedia.map((footerItem) => (
            <IconLink
              iconType={footerItem.iconType}
              href={footerItem.href}
              size={mobile ? '36' : '55'}
            />
          ))}
        </SocialMediaContainer>
      </div>
    </Container>
  )
}
export default Footer
