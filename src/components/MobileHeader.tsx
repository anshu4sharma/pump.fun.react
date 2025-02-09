import { FC } from 'react'
import { MenuIcon } from 'lucide-react'

interface MobileHeaderProps {
  onMenuClick: () => void
}

const MobileHeader: FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#1a1b1e] border-b border-gray-800 z-40">
      <div className="flex items-center justify-between px-4 h-full">
        <button 
          className="p-2 text-gray-400 hover:text-white"
          onClick={onMenuClick}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <img
            alt="Logo"
            width="32"
            height="32"
            className="rounded-lg"
            src="https://plotfun.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.005438bc.png&w=64&q=75"
          />
          <h1 className="text-lg font-bold text-white">PLOTBSC.fun</h1>
        </div>
        <div className="w-10"></div>
      </div>
    </div>
  )
}

export default MobileHeader 