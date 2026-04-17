const MenuButton = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="block sm:hidden text-white text-2xl focus:outline-none z-50"
    >
      {isOpen ? '✕' : '☰'}
    </button>
  )
}

export default MenuButton