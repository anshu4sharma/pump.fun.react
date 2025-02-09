import { Link, useLocation } from 'react-router'
import { HomeIcon, PlusIcon, UserIcon } from 'lucide-react'

const NavigationLinks = ({  onClose }: { onClose: () => void }) => {
  const location = useLocation()

  const links = [
    { href: '/', label: 'Homepage', icon: <HomeIcon className="w-5 h-5" /> },
    { href: '/create-token', label: 'Create Token', icon: <PlusIcon className="w-5 h-5" /> },
    { href: '/profile', label: 'Profile', icon: <UserIcon className="w-5 h-5" /> },
  ]

  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.href
        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl transition-colors mb-2 ${
              isActive
                ? 'text-white bg-yellow-500/10 hover:bg-yellow-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        )
      })}
    </>
  )
}

export default NavigationLinks
