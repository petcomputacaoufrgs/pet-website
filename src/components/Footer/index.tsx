import isMobile from '@/hooks/isMobile'
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
  const mobile = isMobile()

  return (
    <Container id="contact-us">
      <div>
        <ContactUs>Entre em contato</ContactUs>
        <EmailContainer>
          <Icon type="mail" />
          <Email>pet@inf.ufrgs.br</Email>
        </EmailContainer>
      </div>
      <div>
        <SocialMedia>Nossas redes sociais</SocialMedia>
        <SocialMediaContainer>
          <IconLink
            iconType={'ig'}
            href={'https://www.instagram.com/petcompufrgs'}
            size={mobile ? '36' : '55'}
          />
          <IconLink
            iconType={'github'}
            href={'https://github.com/petcomputacaoufrgs'}
            size={mobile ? '36' : '55'}
          />
          <IconLink
            iconType={'linkedin'}
            href={'https://www.linkedin.com/company/petcompufrgs'}
            size={mobile ? '36' : '55'}
          />
          <IconLink
            iconType={'yt'}
            href={'https://www.youtube.com/@PetCompUfrgs'}
            size={mobile ? '36' : '55'}
          />
          <IconLink
            iconType={'fb'}
            href={'https://www.facebook.com/PETCompUFRGS'}
            size={mobile ? '36' : '55'}
          />
        </SocialMediaContainer>
      </div>
    </Container>
  )
}
export default Footer
