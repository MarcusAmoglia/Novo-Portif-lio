import { useState } from 'react'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import MenuButton from './MenuButton'

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="px-20 fixed top-0 left-0 w-full bg-black/95 shadow-lg z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        <Logo />
        <DesktopMenu />
        <MenuButton 
          isOpen={menuAberto} 
          onToggle={() => setMenuAberto(!menuAberto)} 
        />
      </div>
      <MobileMenu 
        isOpen={menuAberto} 
        onClose={() => setMenuAberto(false)} 
      />
    </nav>
  )
}

export default Navbar