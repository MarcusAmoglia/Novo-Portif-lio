import NavLink from './NavLink'

const MobileMenu = ({ isOpen, onClose }) => {
  const links = [
    { to: '/Home', label: 'Home' },
    { to: '/Projetos', label: 'Projetos' },
    { to: '/Habilidades', label: 'Habilidades' },
    { to: '/Trajetoria', label: 'Trajetória' },
    { to: '/Contato', label: 'Contato' },
  ]

  return (
    <>
      {/* Overlay (fundo escuro) */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          sm:hidden
        `}
        onClick={onClose}
      />

      {/* Menu lateral */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-black/95 z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          sm:hidden
        `}
      >
        <div className="flex flex-col items-center gap-6 pt-20">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu