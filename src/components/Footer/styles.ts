import styled from 'styled-components'

export const Container = styled.footer`
  padding: 2rem 4.75rem;
  background-color: #4d4c52;
  display: flex;
  justify-content: space-between;
`
export const ContactUs = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #e87180;
`

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Email = styled.p`
  font-size: 1.25rem;
  color: #fbf9fb;
  margin-left: 0.5rem;
`

export const SocialMedia = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: #e87180;
  text-align: right;
`

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.5rem;
  margin-top: 0.5rem;
`
