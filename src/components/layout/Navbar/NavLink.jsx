import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  
  return (
    <Link 
      to={to} 
      className={`
        relative pb-0.5
        transition-colors duration-300
        ${isActive(to) ? 'text-[#00eeff]' : 'text-gray-400 hover:text-[#22E3FF]'}
        after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-[#22E3FF]
        after:transition-all after:duration-300 after:ease-out
        ${isActive(to) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
      `}
    >
      {children}
    </Link>
  )
}

export default NavLink