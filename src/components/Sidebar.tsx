import { type Location } from 'react-router'
import Logo from './Logo'
import NavigationLinks from './NavigationLinks'
import SocialLinks from './SocialLinks'
import WalletSection from './WalletSection'

const Sidebar = ({ location }: { location:  Location<any> }) => {
  if (location.pathname === "/") {
    return null;
  }
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1b1e] border-r border-gray-800 flex flex-col">
      <div className="p-6 pb-2">
        <Logo />
      </div>
      <div className="px-4">
        <NavigationLinks onClose={() => { }} />
      </div>
      <div className="flex-1" />
      <div className="mb-4 flex justify-center gap-6">
        <SocialLinks />
      </div>
      <div className="p-6 pt-4 border-t border-gray-800">
        <WalletSection />
      </div>
    </aside>
  )
}

export default Sidebar 