import { Link, Navbar } from './styles'

const NavBar = ({
  navData,
}: {
  navData: { label: string; href: string }[]
}) => {
  return (
    <Navbar size={navData.length}>
      {navData.map((navItem, index) => (
        <Link href={navItem.href} key={`navbar-item-${index}`}>
          {navItem.label}
        </Link>
      ))}
    </Navbar>
  )
}
export default NavBar
