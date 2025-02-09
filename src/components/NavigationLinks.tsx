import { FC } from 'react'
import { HomeIcon, PlusIcon, UserIcon } from 'lucide-react'

const NavigationLinks: FC = () => {
  return (
    <>
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors mb-2 text-white bg-yellow-500/10 hover:bg-yellow-500/20">
        <HomeIcon className="w-5 h-5" />
        <span>Homepage</span>
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors mb-2 text-gray-400 hover:text-white hover:bg-white/5">
        <PlusIcon className="w-5 h-5" />
        <span>Create Token</span>
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors mb-2 text-gray-400 hover:text-white hover:bg-white/5">
        <UserIcon className="w-5 h-5" />
        <span>Profile</span>
      </button>
    </>
  )
}

export default NavigationLinks 