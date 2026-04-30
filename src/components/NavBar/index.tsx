import { useState } from 'react'
import { Link, Navbar, MenuButton, MobileMenu, MobileLink, NavBarWrapper } from './styles'
import { INavBar } from './types'
import Icon from '@/components/Icon'

const NavBar = ({ navData }: INavBar) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <NavBarWrapper>
      <Navbar size={navData.length}>
        {navData.map((navItem, index) => (
          <Link
            href={navItem.href}
            key={`navbar-item-${index}`}
            target={navItem.external ? 'blank' : '_self'}
            rel={navItem.external ? "noopener noreferrer" : undefined}>
            {navItem.label}
          </Link>
        ))}
      </Navbar>

      <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
        <Icon type="menu" />
      </MenuButton>

      <MobileMenu isOpen={isMenuOpen}>
        {navData.map((navItem, index) => (
          <MobileLink
            href={navItem.href}
            key={`mobile-navbar-item-${index}`}
            target={navItem.external ? 'blank' : '_self'}
            rel={navItem.external ? "noopener noreferrer" : undefined}
            onClick={closeMenu}>
            {navItem.label}
          </MobileLink>
        ))}
      </MobileMenu>
    </NavBarWrapper>
  )
}
export default NavBar
