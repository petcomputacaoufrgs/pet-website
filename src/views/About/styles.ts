import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 14.375rem;
  @media ${devices.desktopS} {
    padding-bottom: 8.5rem;
  }

  background-color: ${(props) => props.theme.colors.secondary};
`


export const HeaderTitle = styled.div`
  background-color: white;
  font-size: 6rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 4px;


  @media (max-width: 1120px) {
    font-size: clamp(3rem, 8vw, 6rem);
  }

`
export const TimelineContainer = styled.div`
  font-family: poppins, sans-serif;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  margin: 40px 0;

`;

export const Section = styled.div`
  /* Usamos padding-bottom em vez de margin para que a linha 
     atravesse o espaço vazio e toque na seção de baixo */
  padding-bottom: 40px; 
  padding-left: 30px;
  position: relative; /* Referência para a linha absoluta */

  width: 90%;
  gap: 1rem;
  display: flex;
  flex-direction: column;


  /* LINHA VERTICAL */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 2px;
    background-color: #9AADC0;
    
    /* Padrão: A linha ocupa toda a altura da seção */
    top: 0;
    bottom: 0;
  }

  /* A linha começa apenas a partir do centro da bolinha (aprox 8px do topo) */
  &:first-child::before {
    top: 8px; 
  }

  /* A linha para na altura da bolinha e não desce mais */
  &:last-child::before {
    height: 8px;
    bottom: auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #444;
  margin: 0 0 10px 0;
  position: relative;

  /* BOLINHA */
  &::after {
    content: '';
    position: absolute;
    
    width: 28px;
    height: 28px;
    background-color: #9AADC0;
    border-radius: 50%;
    
    /* Não vou negar que o valor de left foi chutado, mas ficou visualmente alinhado */
    left: calc(-43px);
    
    top: 4px;; 
  }
`;

export const ContentText = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #4C4A4A;
  text-align: justify;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    color: #c0392b;
  }

  a {
    text-decoration: underline;
    color: #2980b9;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 3vw;

  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.details};
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;

  @media ${devices.desktopS} {
    margin: 0;
    text-align: left;
  }
`

export const StyledImage = styled.img`
  width: 240px;
  object-fit: contain;

  @media (max-width: 1120px) {
    width: 280px;
  }
`