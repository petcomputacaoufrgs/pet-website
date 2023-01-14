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
  return (
    <Container>
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
          />
          <IconLink
            iconType={'github'}
            href={'https://github.com/petcomputacaoufrgs'}
          />
          <IconLink
            iconType={'linkedin'}
            href={'https://www.linkedin.com/company/petcompufrgs'}
          />
          <IconLink
            iconType={'yt'}
            href={'https://www.youtube.com/@PetCompUfrgs'}
          />
          <IconLink
            iconType={'fb'}
            href={'https://www.facebook.com/PETCompUFRGS'}
          />
        </SocialMediaContainer>
      </div>
    </Container>
  )
}
export default Footer
