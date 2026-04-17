import NavLink from './NavLink'

const DesktopMenu = () => {
  const links = [
    { to: '/Home', label: 'Home' },
    { to: '/Projetos', label: 'Projetos' },
    { to: '/Habilidades', label: 'Habilidades' },
    { to: '/Trajetoria', label: 'Trajetória' },
    { to: '/Contato', label: 'Contato' },
  ]

  return (
    <div className="hidden sm:flex items-center gap-6">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default DesktopMenu