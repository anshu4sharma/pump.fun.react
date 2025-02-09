import { FC, useState } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import MobileMenu from './components/MobileMenu'
import MainContent from './components/MainContent'

const App: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#13141b]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <MainContent />
      </main>
    </div>
  )
}

export default App

