import { Link } from 'react-router-dom'

const FooterLink = ({ to, children }) => {
  return (
    <Link to={to} className="text-gray-400 hover:text-[#22E3FF] transition-colors text-sm">
      {children}
    </Link>
  )
}

export default FooterLink