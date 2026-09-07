import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.details2};
  color: white;
  width: 100%;
  max-width: 20rem;
  height: 27rem;
  padding: 1rem;
  margin-left: auto;
  border-radius: 0.7rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 767px) {
    max-width: 20rem;
    height: auto;
    min-height: 25rem;
    margin: 0 auto;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: right;
`

export const CardNumber = styled.span`
  font-size: 8rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  top: 1rem;
  left: 1rem;
`

export const MemberImg = styled.img`
  border-radius: 50%;
  height: 10.313rem;
  width: 10.313rem;
  object-fit: cover;
  z-index: 3;

  @media (max-width: 374px) {
    height: 8.5rem;
    width: 8.5rem;
  }
`

export const MainInfoContainer = styled.div`
  text-align: right;
  margin: 1rem 0;
`

export const Name = styled.h3`
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 2.25rem;
    line-height: 1.1;
    overflow-wrap: anywhere;
  }

  @media (max-width: 374px) {
    font-size: 2rem;
  }
`

export const Details = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`

export const InterestsContainer = styled.div`
  font-size: 1rem;
  margin-top: 1.5rem;
`

export const InterestTitle = styled.h4`
  font-weight: 600;
`
