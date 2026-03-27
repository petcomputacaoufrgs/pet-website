import { Link, Navbar } from './styles'
import { INavBar } from './types'

const NavBar = ({ navData }: INavBar) => {
  return (
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
  )
}
export default NavBar
