import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ArrowLeftIcon from '../Icon/ArrowLeft';


const HeaderContainer = styled.header<{ $bgImage: string }>`
  width: 100%;
  height: 250px;
  
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative; 
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #333; 
`;

const BackAnchor = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  
  display: flex;
  align-items: center;
  gap: 8px;
  
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 10;
  
  text-shadow: 0px 1px 3px rgba(0,0,0,0.5); 
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

interface HeaderProps {
  image: string;
  children: React.ReactNode;
  backText?: string;
  backLink?: string;
}

// 3. O Componente React
const Header = ({ 
  image, 
  children, 
  backText = "Voltar",
  backLink = "/"
}: HeaderProps) => {
  return (
    <HeaderContainer $bgImage={image}>
      
      <BackAnchor href={backLink}>
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        {backText}
      </BackAnchor>

      {children}
      
    </HeaderContainer>
  );
};

export default Header;