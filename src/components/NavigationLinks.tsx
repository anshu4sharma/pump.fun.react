import { Link, useLocation } from 'react-router'
import { HomeIcon, PlusIcon, UserIcon, LayoutDashboardIcon } from 'lucide-react'

const NavigationLinks = ({  onClose }: { onClose: () => void }) => {
  const location = useLocation()

  // change the icon for dashboard to a different icon

  // also update the icons color to same as link.icon
  const links = [
    { href: '/', label: 'Homepage', icon: <HomeIcon className="w-5 h-5 text-white" /> },
    { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboardIcon className="w-5 h-5 text-white" /> },
    { href: '/create-token', label: 'Create Token', icon: <PlusIcon className="w-5 h-5 text-white" /> },
    { href: '/profile', label: 'Profile', icon: <UserIcon className="w-5 h-5 text-white" /> },
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
            className={` cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl transition-colors mb-2 ${
              isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-[#1a1b1e]/80 backdrop-blur-lg hover:bg-[#1a1b1e]'
                : 'text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-400 hover:to-indigo-400 hover:bg-[#1a1b1e]/50 hover:backdrop-blur-lg'
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
